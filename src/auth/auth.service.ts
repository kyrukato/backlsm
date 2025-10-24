import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, Optional, UnauthorizedException } from '@nestjs/common';
import { CreateUSerDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import  * as bcrypt  from 'bcrypt' //Librería para encriptar las contraseñas
import { JwtService } from '@nestjs/jwt';
import { LoginUSerDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { isUUID } from 'class-validator';
import { GuessLocalService } from 'src/games/local/guess-local/guess-local.service';
import { MemoryLocalService } from 'src/games/local/memory-local/memory-local.service';
import { SequenceLocalService } from 'src/games/local/sequence-local/sequence-local.service';
import { GuessPvpService } from 'src/games/pvp/guess-pvp/guess-pvp.service';
import { MemoryPvpService } from 'src/games/pvp/memory-pvp/memory-pvp.service';
import { SequencePvpService } from 'src/games/pvp/sequence-pvp/sequence-pvp.service';
import { JwtPayload } from 'src/common/interface/jwt-payload.interface';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
  constructor(
    private readonly guessService:GuessLocalService,
    private readonly memoryService:MemoryLocalService,
    private readonly sequenceService:SequenceLocalService,
    private readonly guesspvpService:GuessPvpService,
    private readonly memorypvpService: MemoryPvpService,
    private readonly sequencepvpService: SequencePvpService,
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private readonly jwtService:JwtService,
    private readonly dataSource:DataSource,
  ){}

  async create(createUserDto:CreateUSerDto) {
    try {
      const { password, ...userData} = createUserDto;
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });
      await this.userRepository.save(user);
      this.CreateGuessLevels(user);
      this.CreateMemoryLevels(user);
      this.CreateSequenceLevels(user);
      this.guesspvpService.create({user});
      this.memorypvpService.create({user});
      this.sequencepvpService.create({user});
      delete user.password; 
      delete user.rol;
      delete user.isActive;
      delete user.email;
      const token = this.getJWToken({id: user.id});
      console.log("ID ",user.id) 
      return {
        ...user,
        token: token,
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginUserDto:LoginUSerDto){
    try {
      const {password, email} = loginUserDto;
      const user = await this.userRepository.findOne({
        where: { email },
        select: { email: true, password: true, id:true},
      });
      if(!user){
        throw new UnauthorizedException('Credentials are not valid (email)');
      }
      if(!bcrypt.compareSync(password, user.password)){
        throw new UnauthorizedException('Credentials are not valid (password)');
      }
      delete user.password;
      return {
        ...user,
        token: this.getJWToken({id: user.id}), //Crear el JWT
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const toupdate = updateUserDto;

    const user = await this.userRepository.preload({id, ...toupdate });
    if(!user){
      throw new NotFoundException(`user with id: ${id} not found`)
    }

    //Nos ayuda a que cuando se realicen varias operaciones en la BD si una falla regresa al estado original
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      //Se intenta guardar en la BD
      await queryRunner.manager.save(user);
      //HAcemos el comit a la BD
      await queryRunner.commitTransaction();
      //Cerramos la conexión a la BD
      await queryRunner.release();
      return this.findUser(id);
    } catch (error) {
      //En caso de que falle alguna de las transacciones se hace el RollBack y se restaura la BD
      await queryRunner.rollbackTransaction();
      await queryRunner.release()
      this.handleDBErrors(error);
    }
  }

  async findUser(term: string) {
    let user:User;
    if( isUUID(term)){
      user = await this.userRepository.findOneBy({id: term});
    }
    if(!user){
      throw new NotFoundException(`User with ${term} not found`)
    }
    return user;
  }

  private async CreateGuessLevels(user: User){
    const maxLevel = parseInt(process.env.MAX_LEVEL_GUESS);
      this.guessService.create({
        user,
        level: 1,
        unlocked: true
      });
      for (let i = 1; i < maxLevel; i++) {
        this.guessService.create({
          user,
          level: (i+1),
          unlocked: false
        });
      }
  }

  private async CreateMemoryLevels(user:User){
    const maxLevel = parseInt(process.env.MAX_LEVEL_MEMORY);
    this.memoryService.create({
        user,
        level: 1,
        unlocked: true
      });
    for (let i = 1; i < maxLevel; i++) {
      this.memoryService.create({
        user,
        level: (i+1),
        unlocked: false
      });      
    }
  }

  private async CreateSequenceLevels(user:User){
    const maxLevel = parseInt(process.env.MAX_LEVEL_SEQUENCE);
    this.sequenceService.create({
        user,
        level: 1,
        unlocked: true
      });
    for (let i = 1; i < maxLevel; i++) {
      this.sequenceService.create({
        user,
        level: (i+1),
        unlocked: false
      });      
    }
  }

  //Crear el JWT
  private getJWToken(payload:JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}

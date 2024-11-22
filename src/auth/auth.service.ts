import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUSerDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import  * as bcrypt  from 'bcrypt' //Librería para encriptar las contraseñas
import { JwtPayload } from './interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginUSerDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private readonly jwtService:JwtService
  ){}
  async create(createUserDto:CreateUSerDto) {
    try {
      const { password, ...userData} = createUserDto;
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });
      const token = this.getJWToken({id: user.id});
      user.token = token;
      await this.userRepository.save(user)
      delete user.password;
      return {
        ...user,
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
      return {
        ...user,
        token: this.getJWToken({id: user.id}),
      };
    } catch (error) {
      this.handleDBErrors(error);
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
      console.log(error);
      throw new InternalServerErrorException('Please check serverlogs');
    }
  }
}

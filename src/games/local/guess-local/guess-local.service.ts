import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateGuessLocalDto } from './dto/create-guess-local.dto';
import { UpdateGuessLocalDto } from './dto/update-guess-local.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { GuessLocal } from './entities/guess-local.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class GuessLocalService {

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(GuessLocal)
    private readonly guessLocalRepository: Repository<GuessLocal>
  ){}

  async create(createGuessLocalDto: CreateGuessLocalDto) {
    this.guessLocalRepository.save(createGuessLocalDto);
  }

  async findOne(idUser: string) {
    try {
      return await this.guessLocalRepository.findOneBy({
        user: {id: idUser}
      })
    } catch (error) {
      this.handleDBErrors(error);
    } 
  }

  async findLevels(idUser: string){
    try{
      return await this.guessLocalRepository.find({
        where: {
          user: {id: idUser}
        }
      });
    }catch(error){
      this.handleDBErrors(error);
    }
  }

  async update(updateGuessLocalDto: UpdateGuessLocalDto) {
    const {userID, ...toupdate} = updateGuessLocalDto;
    const guesslocal = this.findOne(userID);
    if(!guesslocal){
      throw new NotFoundException(`El usuario no fue encontrado`)
    }
    const updateguesslocal = await this.guessLocalRepository.preload({
      id: (await guesslocal).id,
      user: {id: userID},
      ...toupdate,
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(updateguesslocal);
      await queryRunner.commitTransaction()
      await queryRunner.release()
      delete updateguesslocal.user;
      return updateguesslocal;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}

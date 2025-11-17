import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateGuessPvpDto } from './dto/create-guess-pvp.dto';
import { UpdateGuessPvpDto } from './dto/update-guess-pvp.dto';
import { GuessPvp } from './entities/guess-pvp.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GuessPvpService {

  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(GuessPvp)
    private readonly guessPvpRepository: Repository<GuessPvp>
  ){}

  create(createGuessPvpDto: CreateGuessPvpDto) {
    this.guessPvpRepository.save(createGuessPvpDto);
  }

  async findTopTen() {
    const ranking = await this.guessPvpRepository.find({
      order: {victorys: 'DESC'},
      take: 10,
      skip: 0,
      relations: {user:true},
    });
    return ranking.map( (rank) => ({
      ...rank,
      user: rank.user.nickname
    }));
  }

  async findOne(idUser: string) {
    try {
      return await this.guessPvpRepository.findOneBy({
        user: {id: idUser}
      })
    } catch (error) {
      this.handleDBErrors(error);
    } 
  }

  async update( updateGuessPvpDto: UpdateGuessPvpDto) {
    const {userID} = updateGuessPvpDto;
    const guessPvp = await this.guessPvpRepository.findOneBy({
      user: {id: userID}
    });
    if(!guessPvp){
      throw new NotFoundException(`El usuario no fue encontrado`)
    }
    let victorias = guessPvp.victorys + 1;
    const updateguessPvp = await this.guessPvpRepository.preload({
      id: guessPvp.id,
      user: {id: userID},
      victorys: victorias,
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(updateguessPvp);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      delete updateguessPvp.user;
      return updateguessPvp;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} guessPvp`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}

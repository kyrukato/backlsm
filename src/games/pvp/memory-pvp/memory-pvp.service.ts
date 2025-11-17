import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMemoryPvpDto } from './dto/create-memory-pvp.dto';
import { UpdateMemoryPvpDto } from './dto/update-memory-pvp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemoryPvp } from './entities/memory-pvp.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MemoryPvpService {

  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(MemoryPvp)
    private readonly memoryPvpRepository: Repository<MemoryPvp>
  ){}

  create(createMemoryPvpDto: CreateMemoryPvpDto) {
    this.memoryPvpRepository.save(createMemoryPvpDto);
  }

  async findTopTen() {
    const ranking = await this.memoryPvpRepository.find({
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
      return await this.memoryPvpRepository.findOneBy({
        user: {id: idUser}
      })
    } catch (error) {
      this.handleDBErrors(error);
    } 
  }

  async update(updateMemoryPvpDto: UpdateMemoryPvpDto) {
    const {userID} = updateMemoryPvpDto;
    const MemoryPvp = await this.memoryPvpRepository.findOneBy({
      user: {id: userID}
    });
    if(!MemoryPvp){
      throw new NotFoundException(`El usuario no fue encontrado`)
    }
    let victorias = MemoryPvp.victorys +1;
    const updateMemoryPvp = await this.memoryPvpRepository.preload({
      id: MemoryPvp.id,
      user: {id: userID},
      victorys: victorias
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(updateMemoryPvp);
      await queryRunner.commitTransaction()
      await queryRunner.release()
      delete updateMemoryPvp.user;
      return updateMemoryPvp;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} memoryPvp`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}

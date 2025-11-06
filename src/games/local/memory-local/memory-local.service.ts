import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMemoryLocalDto } from './dto/create-memory-local.dto';
import { UpdateMemoryLocalDto } from './dto/update-memory-local.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemoryLocal } from './entities/memory-local.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MemoryLocalService {

  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(MemoryLocal)
    private readonly memoryLocalRepository: Repository<MemoryLocal>
  ){}

  create(createMemoryLocalDto: CreateMemoryLocalDto) {
    this.memoryLocalRepository.save(createMemoryLocalDto);
  }

  async findOne(idUser: string) {
    try {
      return await this.memoryLocalRepository.findOneBy({
        user: {id: idUser}
      })
    } catch (error) {
      this.handleDBErrors(error);
    } 
  }

  async findLevels(idUder:string){
    try {
      return await this.memoryLocalRepository.find({
        where: {
          user: {id: idUder}
        }
      })
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async update(updateMemoryLocalDto: UpdateMemoryLocalDto) {
    const {userID, ...toupdate} = updateMemoryLocalDto;
    const memorylocal = await this.memoryLocalRepository.findOneBy({
      user: {id: userID}
    });
    if(!memorylocal){
      throw new NotFoundException(`El usuario no fue encontrado`)
    }
    const updateguesslocal = await this.memoryLocalRepository.preload({
      id: memorylocal.id,
      user: {id: userID},
      ...toupdate
    })
    if(toupdate.points > memorylocal.points){
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
  }

  remove(id: number) {
    return `This action removes a #${id} memoryLocal`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSequenceLocalDto } from './dto/create-sequence-local.dto';
import { UpdateSequenceLocalDto } from './dto/update-sequence-local.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SequenceLocal } from './entities/sequence-local.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class SequenceLocalService {

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(SequenceLocal)
    private readonly sequenceLocalRepository: Repository<SequenceLocal>
  ){}

  create(createSequenceLocalDto: CreateSequenceLocalDto) {
    this.sequenceLocalRepository.save(createSequenceLocalDto);
  }

  async findOne(idUser: string) {
    try {
      return await this.sequenceLocalRepository.findOneBy({
        user: {id: idUser}
      })
    } catch (error) {
      this.handleDBErrors(error);
    } 
  }

  async findLevels(idUser:string){
    try {
      return await this.sequenceLocalRepository.find({
        where: {
          user: {id: idUser}
        }
      })
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async update(updateSequenceLocalDto: UpdateSequenceLocalDto) {
    const {userID, ...toupdate} = updateSequenceLocalDto;
    const Sequencelocal = await this.sequenceLocalRepository.findOneBy({
      user: {id: userID}
    });
    if(!Sequencelocal){
      throw new NotFoundException(`El usuario no fue encontrado`)
    }
    const updateSequencelocal = await this.sequenceLocalRepository.preload({
      id: Sequencelocal.id,
      user: {id: userID},
      ...toupdate
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(updateSequencelocal);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      delete updateSequencelocal.user;
      return updateSequencelocal;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} sequenceLocal`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}

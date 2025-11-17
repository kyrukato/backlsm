import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSequencePvpDto } from './dto/create-sequence-pvp.dto';
import { UpdateSequencePvpDto } from './dto/update-sequence-pvp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SequencePvp } from './entities/sequence-pvp.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class SequencePvpService {

  constructor(
    private readonly dataSource:DataSource,
    @InjectRepository(SequencePvp)
    private readonly sequencePvpRepository: Repository<SequencePvp>,
  ){}

  create(createSequencePvpDto: CreateSequencePvpDto) {
    this.sequencePvpRepository.save(createSequencePvpDto);
  }

  async findTopTen() {
    const ranking = await this.sequencePvpRepository.find({
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
      return await this.sequencePvpRepository.findOneBy({
        user: {id: idUser}
      })
    } catch (error) {
      this.handleDBErrors(error);
    } 
  }

  async update(updateSequencePvpDto: UpdateSequencePvpDto) {
    const {userID} = updateSequencePvpDto;
    const SequencePvp = await this.sequencePvpRepository.findOneBy({
      user: {id: userID}
    });
    if(!SequencePvp){
      throw new NotFoundException(`El usuario no fue encontrado`)
    }
    let victorias = SequencePvp.victorys +1;
    const updateSequencePvp = await this.sequencePvpRepository.preload({
      id: SequencePvp.id,
      user: {id: userID},
      victorys: victorias,
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(updateSequencePvp);
      await queryRunner.commitTransaction()
      await queryRunner.release()
      await updateSequencePvp.user;
      return updateSequencePvp;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} sequencePvp`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}

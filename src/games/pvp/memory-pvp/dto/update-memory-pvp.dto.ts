import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoryPvpDto } from './create-memory-pvp.dto';

export class UpdateMemoryPvpDto extends PartialType(CreateMemoryPvpDto) {}

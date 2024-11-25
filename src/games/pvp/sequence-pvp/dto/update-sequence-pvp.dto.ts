import { PartialType } from '@nestjs/mapped-types';
import { CreateSequencePvpDto } from './create-sequence-pvp.dto';

export class UpdateSequencePvpDto extends PartialType(CreateSequencePvpDto) {}

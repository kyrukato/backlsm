import { PartialType } from '@nestjs/mapped-types';
import { CreateSequenceLocalDto } from './create-sequence-local.dto';

export class UpdateSequenceLocalDto extends PartialType(CreateSequenceLocalDto) {}

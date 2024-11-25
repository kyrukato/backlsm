import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoryLocalDto } from './create-memory-local.dto';

export class UpdateMemoryLocalDto extends PartialType(CreateMemoryLocalDto) {}

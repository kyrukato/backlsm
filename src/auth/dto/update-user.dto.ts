import { PartialType } from '@nestjs/mapped-types';
import { CreateUSerDto } from './create-user.dto';
import { IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUSerDto) {
}
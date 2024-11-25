import { PartialType } from '@nestjs/mapped-types';
import { CreateGuessLocalDto } from './create-guess-local.dto';

export class UpdateGuessLocalDto extends PartialType(CreateGuessLocalDto) {}

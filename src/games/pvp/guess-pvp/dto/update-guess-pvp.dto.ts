import { PartialType } from '@nestjs/mapped-types';
import { CreateGuessPvpDto } from './create-guess-pvp.dto';

export class UpdateGuessPvpDto extends PartialType(CreateGuessPvpDto) {}

import { IsString, IsInt } from 'class-validator';

export class UpdateUserDto {

  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  address: string;
}
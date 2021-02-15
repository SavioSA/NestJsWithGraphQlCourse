/* eslint-disable prettier/prettier */
import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo deve estar preenchido' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Este campo deve estar preenchido' })
  email: string;
}

import { InputType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

@InputType()
export class AuthInput {
  @Field()
  email: string;
  @Field()
  password: string;
}

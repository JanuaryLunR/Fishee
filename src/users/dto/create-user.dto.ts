import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'Mark'})
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'qwerty'})
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'Mark2001@gmail.com'})
  @IsNotEmpty()
  readonly email: string;
}
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
  @ApiProperty({ example: 'Mark' })
  username: string;

  @ApiProperty({ example: 'qwerty' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example:
    {
      user: {
        userId: 1,
        username: 'Mark2001',
        password: 'qwerty',
      }
    }
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Mark' })
  username: string;

  @ApiProperty({ example: 'Mark2001@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Mark' })
  username: string;

  @ApiProperty({ example: 'Mark2001@gmail.com' })
  email: string;

  @ApiProperty({ example: '2024-06-11T14:23:33.502Z' })
  updatedAt: string;

  @ApiProperty({ example: '2024-06-11T14:23:33.502Z' })
  createdAt: string;
}
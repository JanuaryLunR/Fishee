import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  findOne(filter: {
    where: { id?: string; username?: string; email?: string };
  }): Promise<User> {
    return this.userModel.findOne({ ...filter })
  }

  async create(createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    const user = new User();
    const existUsername = await this.findOne({
      where: { username: createUserDto.username },
    });
    const existEmail = await this.findOne({
      where: { email: createUserDto.email },
    });

    if (existUsername)
      return { warningMessage: 'User with this username already exist' }
    if (existEmail)
      return { warningMessage: 'User with this email already exist' }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 6);

    //TODO Remove hashed password from response to frontend
    user.username = createUserDto.username;
    user.password = hashedPassword;
    user.email = createUserDto.email;

    return user.save();
  }
}

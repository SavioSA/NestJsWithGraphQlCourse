import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch {
      throw new InternalServerErrorException(
        'Não foi possível realizar consulta',
      );
    }
  }

  async findUserById(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne(id);
      if (!user) {
        throw new NotFoundException('Usuário não localizado.');
      }
      return user;
    } catch {
      throw new InternalServerErrorException(
        'Não foi possível realizar consulta',
      );
    }
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(data);
    const userSaved = await this.userRepository.save(data);
    if (!userSaved) {
      throw new InternalServerErrorException(
        'Problem to create a user. Try again',
      );
    }

    return userSaved;
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {
    const user = await this.findUserById(id);

    await this.userRepository.update(user, { ...data });

    const userUpdated = this.userRepository.create({ ...user, ...data });
    return userUpdated;
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.findUserById(id);

    const deleted = await this.userRepository.delete(user);

    return deleted ? true : false;
  }
}

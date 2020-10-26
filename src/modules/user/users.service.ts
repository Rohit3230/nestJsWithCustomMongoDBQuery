import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Db, ObjectID } from 'mongodb';

@Injectable()
export class UsersService {

  // private readonly users: User= [];

  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) { }

  getHello(): string {
    return 'Hello';
  }

  async find(): Promise<User[]> {
    return await this.db.collection('users').find().toArray();
  }

  async findOne(id: string): Promise<User> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException;
    }

    const response = await this.db.collection('users').findOne({
      _id: new ObjectID(id),
    });

    if (!response) {
      throw new NotFoundException;
    }

    return response;
  }

  async create(body: CreateUserDto): Promise<void> {
    // console.log('INIT create users service***', body);
    const createdUser = await this.db.collection('users').insert(body);
    // console.log('createdUser from service****',createdUser);
    return createdUser.insertedIds; 
  }

  async update(id: string, body: UpdateUserDto): Promise<void> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException;
    }

    await this.db.collection('users').updateOne(
      {
        _id: new ObjectID(id),
      },
      {
        $set: {
          ...body,
        },
      },
    );
  }

  async delete(id: string): Promise<void> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException;
    }

    const response = await this.db.collection('users').deleteOne({
      _id: new ObjectID(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException;
    }
  }
}
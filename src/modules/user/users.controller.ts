import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getHello(){
    const createdUserInfo = await this.usersService.find();
    return createdUserInfo;
  }

  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    const createdUserInfo = await this.usersService.create(createCatDto);
    return createdUserInfo;
  }

  @Put()
  async update(@Body() updateUserDto: UpdateUserDto) {
    const updatedUserInfo = await this.usersService.update(updateUserDto.userId, updateUserDto);
    return updatedUserInfo;
  }
}

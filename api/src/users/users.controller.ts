import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get, Post, Body, Param, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    id = parseInt(id.toString(), 10);
    
    if (isNaN(id)) {
      throw new Error('Invalid ID format');
    }

    return this.usersService.delete(id);
  }
}

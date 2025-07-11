import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    email: string;
    name: string;
    password: string;
  }): Promise<User> {
    let password = data.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
      },
    });
  }

  async findOne(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email: email },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}

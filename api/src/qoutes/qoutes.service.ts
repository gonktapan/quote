import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class QoutesService {
  constructor(private prisma: PrismaService) {}

  async create(data: { text: string }) {
    let voteCount = await this.prisma.vote_Qoute.count();

    if (voteCount > 0) {
      throw new Error('Cannot create a new quote while votes exist.');
    }

    return this.prisma.qoute.create({
      data: {
        text: data.text,
      },
    });
  }

  async findAll(p0: { include: { votes: boolean; }; }) {
    return this.prisma.qoute.findMany({
      include: {
      votes: true,
      _count: {
        select: { votes: true }
      }
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.qoute.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { text: string }) {
    // Check if this quote has any votes
    const voteCount = await this.prisma.vote_Qoute.count({
      where: { qouteId: id },
    });

    if (voteCount > 0) {
      throw new Error('Cannot update this quote because it already has votes.');
    }

    return this.prisma.qoute.update({
      where: { id },
      data: {
        text: data.text,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.qoute.delete({
      where: { id },
    });
  }

  async vote(id: number, userId: number) {
    return this.prisma.vote_Qoute.create({
      data: {
        qouteId: id,
        userId: userId,
      },
    });
  }
}

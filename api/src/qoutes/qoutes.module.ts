import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { QoutesService } from './qoutes.service';
import { QoutesController } from './qoutes.controller';

@Module({
  providers: [PrismaService, QoutesService],
  controllers: [QoutesController],
  exports: [QoutesService],
  imports: [],
})
export class QoutesModule {}

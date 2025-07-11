import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { QoutesService } from './qoutes/qoutes.service';
import { QoutesController } from './qoutes/qoutes.controller';
import { QoutesModule } from './qoutes/qoutes.module';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [AuthModule, UsersModule, QoutesModule],
  controllers: [AppController, QoutesController, UsersController],
  providers: [AppService, QoutesService, PrismaService],
})
export class AppModule {}

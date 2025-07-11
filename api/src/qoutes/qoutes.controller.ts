import { Controller } from '@nestjs/common';
import { Get, Post, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { QoutesService } from './qoutes.service';

@Controller('quotes')
export class QoutesController {
  constructor(private readonly qouteService: QoutesService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAllQuotes() {
    return this.qouteService.findAll({
      include: { votes: true },
    });
  }

  @Post()
  @UseGuards(AuthGuard)
  async createQuote(@Request() req) {
    const qoutes = req.body;
    for (const qoute of qoutes) {
      const { text } = qoute;
      await this.qouteService.create({ text });
    }
    return { message: 'Quotes created successfully' };
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getQuote(@Request() req) {
    const { id } = req.params;
    return this.qouteService.findOne(Number(id));
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateQuote(@Request() req) {
    const { id } = req.params;
    const { text } = req.body;
    return this.qouteService.update(Number(id), { text });
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteQuote(@Request() req) {
    const { id } = req.params;
    return this.qouteService.delete(Number(id));
  }

  @Post(':id/vote')
  @UseGuards(AuthGuard)
  async voteQuote(@Request() req) {
    const { id } = req.params;
    const userId = req.user.sub;
    return this.qouteService.vote(Number(id), userId);
  }
}

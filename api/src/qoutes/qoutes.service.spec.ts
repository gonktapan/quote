import { Test, TestingModule } from '@nestjs/testing';
import { QoutesService } from './qoutes.service';

describe('QouteService', () => {
  let service: QoutesService;
  let prisma: any;

  beforeEach(async () => {
    prisma = {
      vote_Qoute: {
        count: jest.fn(),
      },
      qoute: {
        update: jest.fn(),
        findMany: jest.fn(),
      },
    };
    service = new QoutesService(prisma);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not update quote if it has votes', async () => {
    prisma.vote_Qoute.count.mockResolvedValue(1);
    await expect(service.update(1, { text: 'new text' })).rejects.toThrow('Cannot update this quote because it already has votes.');
  });

  it('should update quote if it has no votes', async () => {
    prisma.vote_Qoute.count.mockResolvedValue(0);
    prisma.qoute.update.mockResolvedValue({ id: 1, text: 'new text' });
    await expect(service.update(1, { text: 'new text' })).resolves.toEqual({ id: 1, text: 'new text' });
  });

  it('should return quotes with votes in findAll', async () => {
    const quotes = [{ id: 1, text: 'q1', votes: [], _count: { votes: 0 } }];
    prisma.qoute.findMany.mockResolvedValue(quotes);
    await expect(service.findAll({ include: { votes: true } })).resolves.toEqual(quotes);
  });
});

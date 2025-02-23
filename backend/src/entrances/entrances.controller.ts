import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('entrances')
export class EntranceController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/:id')
  async getEntrance(@Param('id') id: string) {
    return await this.prisma.entrance.findUnique({ where: { id } });
  }
}
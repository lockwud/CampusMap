import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('rooms')
export class RoomController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/:id')
  async getRoom(@Param('id') id: string) {
    return await this.prisma.room.findUnique({ where: { id } });
  }
}
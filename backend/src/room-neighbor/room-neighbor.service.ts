import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomNeighborDto } from './dto/create-room-neighbor.dto';
import { UpdateRoomNeighborDto } from './dto/update-room-neighbor.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoomNeighborService {
  constructor(private prisma: PrismaService) {}

  async createRoomNeighbor(data: CreateRoomNeighborDto) {
    const fromRoom = await this.prisma.room.findUnique({ where: { id: data.roomId } });
    if (!fromRoom) {
      throw new NotFoundException('Room not found');
    }

    const toRoom = await this.prisma.room.findUnique({ where: { id: data.toRoomId } });
    if (!toRoom) {throw new NotFoundException('Target Room not found');}

    return this.prisma.roomNeighbor.create({ data });
  }

  async findAllNeighbors() {
    return this.prisma.roomNeighbor.findMany({ include: { room: true, toRoom: true } });
  }

  async findRoomNeighborById(id: string) {
    const neighbor = await this.prisma.roomNeighbor.findUnique({
      where: { id },
      include: { room: true, toRoom: true },
    });
    if (!neighbor) throw new NotFoundException('Room neighbor not found');
    return neighbor;
  }

  async updateRoomNeighbors(id: string, data: UpdateRoomNeighborDto) {
    await this.findRoomNeighborById(id);
    return this.prisma.roomNeighbor.update({ where: { id }, data });
  }

  async removeRoomNeighbors(id: string) {
    await this.findRoomNeighborById(id);
    return this.prisma.roomNeighbor.delete({ where: { id } });
  }
}

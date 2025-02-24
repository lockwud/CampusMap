// src/floors/floors.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FloorsService {
  constructor(private prisma: PrismaService) {}

  async addFloor(data: CreateFloorDto) {
    const building = await this.prisma.building.findUnique({
      where: { id: data.buildingId },
      include: { Floor: true },
    });

    if (!building) {
      throw new NotFoundException('Building not found');
    }

    if (data.number > building.floors || data.number === 0) {
      throw new BadRequestException('Number exceeds the total floors in the building or floor can\'nt be 0');
    }

    const newFloor =  this.prisma.floor.create({
      data: {
        number: data.number,
        buildingId: data.buildingId,
      },
    });
    return newFloor
  }

  async findAllFloors() {
    return this.prisma.floor.findMany({ include: { building: true, rooms: true } });
  }

  async findFloorById(id: string) {
    const floor = await this.prisma.floor.findUnique({
      where: { id },
      include: { building: true, rooms: true },
    });

    if (!floor) {
      throw new NotFoundException(`Floor with ID ${id} not found`);
    }

    return floor;
  }

  async updateFloor(id: string, updateFloorDto: UpdateFloorDto) {
    const floor = await this.prisma.floor.findUnique({ where: { id } });
    if (!floor) {
      throw new NotFoundException(`Floor with ID ${id} not found`);
    }

    const updatedFloor = await this.prisma.floor.update({
      where: { id },
      data: updateFloorDto,
    });
    return updatedFloor
  }

  async removeFloor(id: string) {
    const floor = await this.prisma.floor.findUnique({ where: { id } });
    if (!floor) {
      throw new NotFoundException(`Floor with ID ${id} not found`);
    }

    const deletedFloor = await this.prisma.floor.delete({ where: { id } });
    return deletedFloor
  }

}

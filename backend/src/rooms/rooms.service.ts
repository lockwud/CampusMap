import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService){

  }
  async createRoom(data: CreateRoomDto) {
    const findRoom = await this.prisma.room.findFirst({
      where:{
        name: data.name
      }
    })
    if(findRoom){
      throw new ConflictException(`Room ${findRoom.name} already exist`)
    }
    const newRoom = await this.prisma.room.create({
      data,
    })
    return newRoom
  }

  async fetchAllRooms(){
    const retrievedRooms = await this.prisma.room.findMany()
    return retrievedRooms
  }


  async fetchRoomById(id: string){
    const retrievedRoom = await this.prisma.room.findUnique({
      where:{
        id: id
      }
    })
    if(!retrievedRoom){
      throw new NotFoundException("Room not found")
    }
    return retrievedRoom;
  }

}

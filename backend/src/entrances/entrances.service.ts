import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntranceDto } from './dto/create-entrance.dto';
import { UpdateEntranceDto } from './dto/update-entrance.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { BuildingsService } from "../buildings/buildings.service"


@Injectable()
export class EntrancesService {
    constructor(
        private prisma: PrismaService,
        private buildingService: BuildingsService
    ){

    }
    async addEntrance(data: CreateEntranceDto){
        const retrievedBuilding = await this.buildingService.fetchBuildingByName(data.name)
        if(!retrievedBuilding){
            throw new NotFoundException("Building not found")
        }
        const entrance = await this.prisma.entrance.create({
            data
        });
        return entrance
    }

    async findAllEntrances(){
        const entrance = await this.prisma.entrance.findMany();
        return entrance
    }

    async findEntranceById(id: string){
        const entrance = await this.prisma.entrance.findUnique({
         where:{
            id: id
         }
        });
        return entrance
    }
  
}

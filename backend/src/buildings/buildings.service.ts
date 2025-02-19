import { 
  BadRequestException, 
  ConflictException,
  Injectable, 
  NotFoundException } 
from '@nestjs/common';

import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class BuildingsService {
  constructor(
    private prisma: PrismaService
  ){
  }

  async fetchBuildingByName(name: string){
    const fetchBuilding = await this.prisma.building.findUnique({
      where:{
        name: name
      }
    })
    return fetchBuilding
  }
  async createBuilding(data: CreateBuildingDto) {
    const building = await this.fetchBuildingByName(data.name)
    if(building?.name){
      throw new ConflictException("Building already exist")
    }
    const newBuilding = await this.prisma.building.create({
      data: {
        ...data
      }
    })
    return newBuilding   
  }


  async findAllBuildings() {
    const buildings = await this.prisma.building.findMany()
    if(buildings == null){
      throw new NotFoundException("No buildings available")
    }
    return buildings
  }

  async findBuildingById(id: string) {
    const retrievedBuilding = await this.prisma.building.findUnique({
      where:{
        id: id
      }
    })
    if(!retrievedBuilding){
      throw new NotFoundException("Building not found")
    }
    return retrievedBuilding
  }

  async update(id: string, data: UpdateBuildingDto) {
    const retrievedBuilding = await this.findBuildingById(id)
    if(!retrievedBuilding){
      throw new NotFoundException("Building not found")
    }
    const updateBuildingInfo = await this.prisma.building.update({
      where:{
        id: retrievedBuilding.id
      },
      data:{
        ...data
      }
    })

    return updateBuildingInfo

  }

  async removeBuilding(id: string) {
    const retrievedBuilding = await this.findBuildingById(id)
    if(!retrievedBuilding){
      throw new NotFoundException("Building not found")
    }
    const deletedBuildingInfo = await this.prisma.building.delete({
      where:{
        id: retrievedBuilding.id
      }
    })
    return deletedBuildingInfo
  }

}

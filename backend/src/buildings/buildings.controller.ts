import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, Query} from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Post('add')
  async saveBuilding(@Body() data: CreateBuildingDto, @Res() res: Response, @Req() req: Request) {
    const building = await this.buildingsService.createBuilding(data)
    res.json({message: "Building saved", building})
  }

  @Get('/')
  async retrieveAllBuildings(@Req() req: Request, @Res() res: Response){
    const buildings = await this.buildingsService.findAllBuildings()
    res.status(HttpStatusCode.Ok).json({
      message: "Retrieved buildings",
      buildings
    })

  }

  @Get(':id')
  async retrieveBuildingById(@Param('id') id: string, @Req() req: Request, @Res() res: Response){
    const building = await this.buildingsService.findBuildingById(id)
    res.status(HttpStatusCode.Ok).json({
      retrieved: 
        "Successfully rectrieved ",
        building
      
    })
  }

  @Get('name')
  async retrieveBuildingByName(@Query('name') name: string,  @Req() req: Request, @Res() res: Response){
    const building = await this.buildingsService.fetchBuildingByName(name)
    res.status(HttpStatusCode.Ok).json({
      building
    })
  }

  @Patch(':id')
  async updateBuilding(@Param('id') id: string, @Body() data: UpdateBuildingDto,  @Req() req: Request, @Res() res: Response ){
    const updatedBuilding = await this.buildingsService.update(id, data)
    res.status(HttpStatusCode.Ok).json({
      message: "Building updated",
      updatedBuilding
    })
  }

  @Delete(':id')
  async removeBuilding(@Param('id') id: string, @Res() res: Response, @Req() req: Request){
    const deleted = await this.buildingsService.removeBuilding(id)
    res.status(HttpStatusCode.Ok).json({
      message: "Deleted building", deleted
    })
  }

}

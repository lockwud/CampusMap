import { BadRequestException, NotFoundException } from "@nestjs/common"
import {BuildingsService} from "../buildings/buildings.service"
export class PathfinderService{
    constructor(
        private buildingsService: BuildingsService
    ){
    }

    async findShortestPath(fromRoomId: string, toRoomId: string){
    }
   
}
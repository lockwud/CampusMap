import { IsString, IsOptional, IsNumber } from "class-validator";
export class CreateRoomDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    x_coordinate: number;

    @IsNumber()
    y_coordinate: number;

    @IsString()
    buildingId: string;

    @IsString()
    floorId: string
}

import { IsString, IsOptional, IsNumber } from "class-validator";

export class CreateEntranceDto {
    @IsString()
    name: string;

    @IsNumber()
    lat: number;

    @IsNumber()
    lng: number;

    @IsString()
    @IsOptional()
    roomId?: string;

    @IsString()
    buildingId: string;
}

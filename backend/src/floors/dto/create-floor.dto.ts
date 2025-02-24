import { IsNumber, IsString } from "class-validator";
export class CreateFloorDto {
    @IsNumber()
    number: number;

    @IsString()
    buildingId: string;
}

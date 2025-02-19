import { IsNumber, IsString } from "class-validator";

export class CreateBuildingDto {
    @IsString()
    name: string;

    @IsNumber()
    floors: number;
}

import { IsNumber, IsString } from "class-validator";

export class CreateRoomNeighborDto {
    @IsString()
    roomId: string;

    @IsString()
    toRoomId: string;

    @IsNumber()
    distance: number;

    @IsString()
    connectionType: string;
}

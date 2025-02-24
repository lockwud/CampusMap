import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomNeighborDto } from './create-room-neighbor.dto';

export class UpdateRoomNeighborDto extends PartialType(CreateRoomNeighborDto) {}

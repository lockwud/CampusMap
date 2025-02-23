import { Module } from '@nestjs/common';
import { EntrancesService } from './entrances.service';
import { EntranceController } from './entrances.controller';

@Module({
  controllers: [EntranceController],
  providers: [EntrancesService],
})
export class EntrancesModule {}

import { Module } from '@nestjs/common';
import { EntrancesService } from './entrances.service';
import { EntranceController } from './entrances.controller';
import { PrismaService } from '../../prisma/prisma.service';


@Module({
  controllers: [EntranceController],
  providers: [EntrancesService, PrismaService],
})
export class EntrancesModule {}

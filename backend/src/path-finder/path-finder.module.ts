import { Module } from '@nestjs/common';
import { PathfindingService } from './path-finder.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [],
  providers: [PathfindingService, PrismaService],
})
export class PathFinderModule {}

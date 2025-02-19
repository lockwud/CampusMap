import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';
import { GoolgleMapsService } from './google-maps/google-maps.service';

@Module({
  imports: [BuildingsModule],
  controllers: [AppController],
  providers: [AppService, GoolgleMapsService],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();
const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
  });
}
bootstrap();

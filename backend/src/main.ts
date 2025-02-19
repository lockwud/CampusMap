import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';

// Load environment variables from .env file
configDotenv();
const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
  });
}
bootstrap();

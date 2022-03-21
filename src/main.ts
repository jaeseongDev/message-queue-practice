import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from "typeorm";

async function bootstrap() {
  createConnection()
    .then(() => {
      console.log("데이터베이스 연결");
    })
    .catch((err) => console.log(err));
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

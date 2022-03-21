import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { AudioConsumer } from "./AudioConsumer";

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      redis: {
        host: 'localhost',
        port: 6379,
      },
      limiter: {
        max: 1,
        duration: 60000
      }
    }),
  ],
  providers: [AppService, AudioConsumer],
  controllers: [AppController],
})
export class AppModule {}

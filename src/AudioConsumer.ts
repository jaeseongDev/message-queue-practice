import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { Logger } from "@nestjs/common";
import { getManager } from "typeorm";
let i = 0;

@Processor('audio')
export class AudioConsumer {
  private readonly logger: Logger = new Logger(this.constructor.name);

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    i += 1;
    console.log(i);
    if (i <= 1) {
      throw new Error("에러 발생");
    }
  }
}
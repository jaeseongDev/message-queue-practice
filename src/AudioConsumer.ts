import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { Logger } from "@nestjs/common";

@Processor('audio')
export class AudioConsumer {
  private readonly logger: Logger = new Logger(this.constructor.name);

  @Process('transcode')
  handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    setTimeout(() => {
      this.logger.debug(job.data);
    }, 10000);
  }
}
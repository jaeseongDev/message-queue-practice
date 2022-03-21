import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { Logger } from "@nestjs/common";
import { getManager } from "typeorm";

@Processor('audio')
export class AudioConsumer {
  private readonly logger: Logger = new Logger(this.constructor.name);

  @Process('transcode')
  async handleTranscode(job: Job) {
    const entityManager = getManager();
    const result = await entityManager.query(`select 1 from duo`);
    // this.logger.debug('Start transcoding...');
    // setTimeout(() => {
    //   this.logger.debug(job.data);
    // }, 10000);

  }
}
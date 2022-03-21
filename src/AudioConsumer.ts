import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { Logger } from "@nestjs/common";
import { getManager } from "typeorm";

@Processor('audio')
export class AudioConsumer {
  private readonly logger: Logger = new Logger(this.constructor.name);

  // @Process('transcode')
  @Process({
    name: 'transcode',
    concurrency: 5
  })
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    const entityManager = getManager();
    const result = await entityManager.query(`SELECT * FROM test WHERE SLEEP(3)=0`);
    console.log(result);
    // this.logger.debug(job.data);
  }
}
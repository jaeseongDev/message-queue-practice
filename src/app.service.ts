import { Injectable } from '@nestjs/common';
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Injectable()
export class AppService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  async addJob() {
    const job = await this.audioQueue.add('transcode', {
      foo: 'bar',
    });
    return job.id;
  }
}

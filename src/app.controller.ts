import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  async addJob() {
    this.logger.debug('Start transcoding...');
    setTimeout(() => {
      this.logger.debug('End transcoding...');
    }, 60000);
    // return await this.appService.addJob();
  }
}

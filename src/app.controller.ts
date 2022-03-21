import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  async addJob() {
    return await this.appService.addJob();
  }
}

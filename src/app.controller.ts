import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from './app.service';
import { getManager } from "typeorm";

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  async addJob() {
    return await this.appService.addJob();
  }

  @Get('nomq')
  async nomq() {
    this.logger.debug('Start transcoding...');
    const entityManager = getManager();
    const result = await entityManager.query(`SELECT * FROM test WHERE SLEEP(3)=0`);
    console.log(result);
  }
}

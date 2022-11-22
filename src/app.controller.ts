import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('dt')
  createDt(@Body() createUserRequest: CreateUserRequest) {
    this.appService.createDt(createUserRequest);
  }

  @Get('dts')
  getDts() {
    return this.appService.getDts();
  }
}

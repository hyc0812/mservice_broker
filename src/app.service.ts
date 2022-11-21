import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  private readonly dt: any[] = [];

  constructor(
    @Inject('WORKER_01') private readonly worker_01: ClientProxy
  ){}

  getHello(): string {
    return 'Hello World!';
  }


  createDt(createUserRequest: CreateUserRequest) {
    this.dt.push(createUserRequest);
    this.worker_01.emit(
      'dt_created',
      new CreateUserEvent(createUserRequest.name),
    );
  }

  getDts() {
    return this.worker_01.send({ cmd: 'get_dts' }, {});
  }
}

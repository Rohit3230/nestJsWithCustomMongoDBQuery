import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, This tutorial is for learning Nest.Js framework of NodeJs !';
  }
}

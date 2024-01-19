import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {

  a = randomUUID();

  getHello(): string {
    return `server: ${this.a}`;
  }
}

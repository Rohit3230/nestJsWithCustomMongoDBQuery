import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usersMobule } from './modules/user/users.module';


@Module({
  imports: [usersMobule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

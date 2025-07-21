import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [PostModule,MongooseModule.forRoot('mongodb://root:example@localhost:27017/'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

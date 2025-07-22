import { Role } from 'src/role/entities/role.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    // ✅ This is required to load your `.env`
    ConfigModule.forRoot({ isGlobal: true }),
    
    // ✅ Async TypeORM setup using ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST')!,
        port: parseInt(configService.get<string>('DB_PORT')!, 10),
        username: configService.get<string>('DB_USERNAME')!,
        password: configService.get<string>('DB_PASSWORD')!,
        database: configService.get<string>('DB_DATABASE')!,
        entities: [User, Role],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    // Your feature modules
    UserModule,

    AuthModule,

    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

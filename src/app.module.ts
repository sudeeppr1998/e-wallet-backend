import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // DatabaseModule,
    AuthModule,
    {
      ...HttpModule.register({}),
      global: true,
    },
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}

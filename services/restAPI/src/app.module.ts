import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './apis/restaurant/restaurant.module';
import { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { PersonalMapsModule } from './apis/personalMaps/personlMaps.module';
import { ChannelModule } from './apis/\bchat bot/channel.module';


@Module({
  imports: [
    PersonalMapsModule,
    RestaurantModule,
    ChannelModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MY_MONGODB), //
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: `redis://${process.env.REDIS_DATABASE_HOST}:6379`,
      isGlobal: true,
    }),
  ],
  controllers: [
    AppController, //
  ],
  providers: [
    AppService, //
  ],
})
export class AppModule {}

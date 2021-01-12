import { Module } from '@nestjs/common';
import { MidgardServiceModule } from './midgard-service/midgard-service.module';

@Module({
  imports: [MidgardServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

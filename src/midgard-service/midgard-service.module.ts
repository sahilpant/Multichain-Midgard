import { Module } from '@nestjs/common';
import { MidgardServiceController } from './midgard-service.controller';
import { MidgardServiceService } from './midgard-service.service';

@Module({
  controllers: [MidgardServiceController],
  providers: [MidgardServiceService],
})
export class MidgardServiceModule {}

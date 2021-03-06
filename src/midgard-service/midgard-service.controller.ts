import { Controller, Get, Query } from '@nestjs/common';
import { MidgardServiceService } from './midgard-service.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('midgard-service')
export class MidgardServiceController {
  constructor(private MidgardService: MidgardServiceService) {}

  @Get('txns')
  @ApiOkResponse({
    description:
      'Enter Offset for pagination offset >=0 and Limit for pagination limit <=50 & >=0',
  })
  GetTxns(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<string> {
    return this.MidgardService.GetTxns(offset, limit);
  }

  @Get('txnsByAddress')
  @ApiOkResponse({
    description:
      'Enter Offset for pagination offset >=0 and Limit for pagination limit <=50 & >=0',
  })
  GetTxnsByAddress(
    @Query('address') address: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<string> {
    return this.MidgardService.GetTxnsByAddress(address, offset, limit);
  }

  @Get('txnsByAsset')
  @ApiOkResponse({
    description:
      'Enter Offset for pagination offset >=0 and Limit for pagination limit <=50 & >=0',
  })
  GetTxnsByAsset(
    @Query('asset') asset: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<string> {
    return this.MidgardService.GetTxnsByAsset(asset, offset, limit);
  }

  @Get('txnsByType')
  @ApiOkResponse({
    description:
      'Enter Offset for pagination offset >=0 and Limit for pagination limit <=50 & >=0 and type=swap,stake,unstake,add,refund,doubleSwap',
  })
  GetTxnsByType(
    @Query('type') type: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<string> {
    return this.MidgardService.GetTxnsByType(type, offset, limit);
  }

  @Get('txnsDetails')
  @ApiOkResponse({
    description:
      'Enter Offset for pagination offset >=0 and Limit for pagination limit <=50 & >=0',
  })
  GetTxnDetails(
    @Query('txid') txid: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<string> {
    return this.MidgardService.GetTxnDetails(txid, offset, limit);
  }

  @Get('pools')
  @ApiOkResponse({
    description: 'Choose from "enabled", "bootstrap", "suspended"',
  })
  GetPools(@Query('status') status: string): Promise<string> {
    return this.MidgardService.GetPools(status);
  }

  @Get('poolDetails')
  @ApiOkResponse({ description: 'Choose from "full", "balanced", "simple"' })
  GetPoolDetails(
    @Query('asset') asset: string,
    @Query('view') view: string,
  ): Promise<string> {
    return this.MidgardService.GetPoolDetails(asset, view);
  }

  @Get('stakers')
  @ApiOkResponse({ description: 'All the stakers addresses' })
  GetStakers(): Promise<string> {
    return this.MidgardService.GetStakers();
  }

  @Get('stakerData')
  @ApiOkResponse({ description: 'Address of the staker' })
  GetStakerData(@Query('address') address: string): Promise<string> {
    return this.MidgardService.GetStakerData(address);
  }

  @Get('stakerPoolData')
  @ApiOkResponse({ description: 'Enter address of the staker and the asset' })
  GetStakerPoolData(
    @Query('address') address: string,
    @Query('asset') asset: string,
  ): Promise<string> {
    return this.MidgardService.GetStakerPoolData(address, asset);
  }

  @Get('history')
  @ApiOkResponse({
    description:
      'Enter date in the format "date month year" eg. 1 Jan 2021 and Choose Interval from "5min", "hour", "day", "week", "month", "year"',
  })
  GetPoolChanges(
    @Query('pool') pool: string,
    @Query('interval') interval: string,
    @Query('from') from: string,
  ): Promise<string> {
    return this.MidgardService.GetPoolChanges(pool, interval, from);
  }

  @Get('Stats_history')
  @ApiOkResponse({
    description:
      'Enter date in the format "date month year" eg. 1 Jan 2021 and Choose Interval from "5min", "hour", "day", "week", "month", "year"',
  })
  GetStatsChanges(
    @Query('interval') interval: string,
    @Query('from') from: string,
  ): Promise<string> {
    return this.MidgardService.GetStatsChanges(interval, from);
  }

  @Get('ThorchainPoolAddress')
  getProxiedPoolAddress():Promise<string>{
    return this.MidgardService.GetProxiedPoolAddress();
  }

}

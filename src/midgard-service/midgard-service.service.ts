import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MidgardServiceService {
  private MidgardApi = 'https://testnet.multichain.midgard.thorchain.info/v1';

  async GetTxns(offset: number, limit: number): Promise<string> {
    try {
      const txns = await axios.get(`${this.MidgardApi}/txs`, {
        params: {
          offset,
          limit,
        },
      });
      return txns.data;
    } catch {
      return this.GetTxns(offset, limit);
    }
  }

  async GetTxnsByAddress(
    address: string,
    offset: number,
    limit: number,
  ): Promise<string> {
    try {
      const txns = await axios.get(`${this.MidgardApi}/txs`, {
        params: {
          address,
          offset,
          limit,
        },
      });
      return txns.data;
    } catch {
      return this.GetTxnsByAddress(address, offset, limit);
    }
  }

  async GetTxnsByAsset(
    asset: string,
    offset: number,
    limit: number,
  ): Promise<string> {
    try {
      const txns = await axios.get(`${this.MidgardApi}/txs`, {
        params: {
          asset,
          offset,
          limit,
        },
      });
      return txns.data;
    } catch {
      return this.GetTxnsByAsset(asset, offset, limit);
    }
  }

  async GetTxnsByType(
    type: string,
    offset: number,
    limit: number,
  ): Promise<string> {
    try {
      const txns = await axios.get(`${this.MidgardApi}/txs`, {
        params: {
          type,
          offset,
          limit,
        },
      });
      return txns.data;
    } catch {
      return this.GetTxnsByType(type, offset, limit);
    }
  }

  async GetTxnDetails(
    txid: string,
    offset: number,
    limit: number,
  ): Promise<string> {
    try {
      const txns = await axios.get(`${this.MidgardApi}/txs`, {
        params: {
          txid,
          offset,
          limit,
        },
      });
      return txns.data;
    } catch {
      return this.GetTxnDetails(txid, offset, limit);
    }
  }

  async GetPools(status: string): Promise<string> {
    try {
      const pools = await axios.get(`${this.MidgardApi}/pools`, {
        params: {
          status,
        },
      });
      return pools.data;
    } catch {
      return this.GetPools(status);
    }
  }

  async GetPoolDetails(asset: string, view: string): Promise<string> {
    try {
      const poolDetail = await axios.get(`${this.MidgardApi}/pools/detail`, {
        params: {
          view,
          asset,
        },
      });
      return poolDetail.data;
    } catch {
      return this.GetPoolDetails(asset, view);
    }
  }

  async GetStakers(): Promise<string> {
    try {
      const stakers = await axios.get(`${this.MidgardApi}/stakers`);
      return stakers.data;
    } catch {
      return this.GetStakers();
    }
  }

  async GetStakerData(address: string): Promise<string> {
    try {
      const stakerdata = await axios.get(
        `${this.MidgardApi}/stakers/${address}`,
      );
      return stakerdata.data;
    } catch {
      return this.GetStakerData(address);
    }
  }

  async GetStakerPoolData(address: string, asset: string): Promise<string> {
    try {
      const stakerPoolData = await axios.get(
        `${this.MidgardApi}/stakers/${address}/pools`,
        {
          params: {
            asset,
          },
        },
      );
      return stakerPoolData.data;
    } catch {
      return this.GetStakerPoolData(address, asset);
    }
  }

  async GetProxiedPoolAddress(): Promise<string> {
    try {
      const address = await axios.get(
        `${this.MidgardApi}/thorchain/pool_addresses`,
      );
      return address.data;
    } catch {
      return this.GetProxiedPoolAddress();
    }
  }

  async GetPoolChanges(
    pool: string,
    interval: string,
    from: string,
  ): Promise<string> {
    const UnixTime = new Date(`${from} GMT`);
    try {
      const history = await axios.get(`${this.MidgardApi}/history/pools`, {
        params: {
          pool,
          interval,
          from: Math.round(UnixTime.getTime() / 1000),
          to: Math.round(new Date().getTime() / 1000),
        },
      });
      return history.data;
    } catch (err) {
      console.log(err);
    }
  }
  async GetStatsChanges(interval: string, from: string): Promise<string> {
    const UnixTime = new Date(`${from} GMT`);
    try {
      const history = await axios.get(`${this.MidgardApi}/history/stats`, {
        params: {
          interval,
          from: Math.round(UnixTime.getTime() / 1000),
          to: Math.round(new Date().getTime() / 1000),
        },
      });
      return history.data;
    } catch (err) {
      console.log(err);
    }
  }
}

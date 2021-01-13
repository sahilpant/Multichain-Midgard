import {
  decryptFromKeystore,
} from '@xchainjs/xchain-crypto';
import { Client as binanceClient, } from '@xchainjs/xchain-binance';
import { Client as bitcoinClient, } from '@xchainjs/xchain-bitcoin';
import { assetAmount, assetToBase } from '@thorchain/asgardex-util';

const phrase = await decryptFromKeystore({"publickeys":{"secp256k1":{"pubKey":{"type":"Buffer","data":[2,245,188,28,193,250,50,213,32,76,70,178,230,220,162,239,250,71,215,73,71,19,49,134,107,34,129,132,214,101,133,220,86]}},"ed25519":{"pubKey":{"type":"Buffer","data":[166,142,252,42,243,221,103,44,208,45,244,193,251,201,216,83,42,116,113,152,227,250,157,11,129,8,132,124,86,216,69,87]}}},"crypto":{"cipher":"aes-128-ctr","ciphertext":"dea58fc8bca8c9ce5b728f6c8808584787bd29ed1c7906db3d1a4a8ad2e284de0c044bbf71925f359044054e33401a0b295b5b46946183ff9e5a7107859384e1c3854d7c7c3bad1632cb3c1be07a7ea6ecd0863439818f","cipherparams":{"iv":"e88bc1215ae952c61edbcd9298d1ab4f"},"kdf":"pbkdf2","kdfparams":{"prf":"hmac-sha256","dklen":32,"salt":"761081078dfd0a93793b43536392a99396c3d90c572313de8c21abd08f71a802","c":262144},"mac":"b098da8c2282da2bdaa7b3bf35e0d88aeccd012ae346bf25b53f9c3d6269596d"},"id":"f7fe8714-39d2-4474-8861-0de189459605","version":1,"meta":"xchain-keystore"}, `Coolman16!`);
const userBinanceClient = new binanceClient({network:'testnet', phrase});
const userBtcClient = new bitcoinClient({network:'testnet', phrase,nodeUrl:'https://api.blockchair.com/bitcoin/testnet',nodeApiKey:`ABC`});
const bitcoinAddress = userBtcClient.getAddress();
const binanceAddress = userBinanceClient.getAddress();

console.log(userBtcClient.getAddress());

userBtcClient.getBalance().then(res => console.log(res));

// function getSlipLimitFromAmount(amount) {
//     const baseTransferAmount = assetToBase(assetAmount(amount));
//     return baseTransferAmount.amount().multipliedBy(0.97);
//   }

// function getSwapMemo(chain, symbol, addr, sliplimit) {
//     return `SWAP:${chain}.${symbol}:${addr}:${sliplimit}`;
//   }

//   const memo = getSwapMemo('BTC','BTC',bitcoinAddress,1925158);
//   console.log(memo);

//   const hash = await userBinanceClient.transfer({
//       asset:'BNB',
//       amount:assetToBase(assetAmount(1)),
//       recipient:'tbnb1sw9pyl3hgjpj8vr9mpmfwq7d7rj2ezknxph6jv',
//       memo
//   })

//   console.log(hash);


import { generatePhrase, encryptToKeyStore } from '@xchainjs/xchain-crypto';

const phrase = generatePhrase();
const keystore = await encryptToKeyStore(phrase, '123456789');

console.log(keystore);
import { ApiPromise, WsProvider } from '@polkadot/api';
import {Keyring} from "@polkadot/keyring";
import { waitReady } from '@polkadot/wasm-crypto';

// Construct
await waitReady();
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });
const keyring = new Keyring({ type: 'sr25519' });

//添加你的铭文钱包助记词
const mnemonic = '';
const sender = keyring.addFromUri(mnemonic);

const recipientAddress = ''  //填写自己铭文钱包的地址

async function sendCustomTransaction() {
    const call1 = api.tx.balances.transferKeepAlive(recipientAddress, 0);

    const remarkData = JSON.stringify({"p": "dot-20", "op": "mint", "tick": "DOTA"});
    const call2 = api.tx.system.remark(remarkData);

    const txHash = await api.tx.utility.batchAll([call1, call2]).signAndSend(sender);
    console.log(`Transaction Hash: ${txHash}`);
}

// 每7秒运行一次
const interval = 7 * 1000; 
setInterval(() => {
    sendCustomTransaction().catch((error) => {
        console.error('Error:', error); });
    }, interval);
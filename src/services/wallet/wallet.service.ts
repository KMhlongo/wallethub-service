import { EvmChain } from '@moralisweb3/common-evm-utils';
import { Injectable } from '@nestjs/common';
import Moralis from 'moralis';

@Injectable()
export class WalletService {
  constructor() {}

  supportedChains = [
    EvmChain.ETHEREUM,
    EvmChain.POLYGON,
    EvmChain.BSC,
    EvmChain.ARBITRUM,
    EvmChain.BASE,
    EvmChain.OPTIMISM,
    EvmChain.LINEA,
    EvmChain.AVALANCHE,
    EvmChain.FANTOM,
    EvmChain.CRONOS,
    EvmChain.GNOSIS,
    EvmChain.CHILIZ,
    EvmChain.MOONBEAM,
    EvmChain.RONIN,
  ];

  async getWalletBalance(walletAddress: string, chain_id?: string) {
    const response = await Moralis.EvmApi.balance
      .getNativeBalance({
        address: walletAddress,
        chain: chain_id ? chain_id : EvmChain.ETHEREUM,
      })
      .then((res) => {
        console.log(res.toJSON());
        return res;
      });
    return response;
  }

  async getWalletTokens(walletAddress: string, chain_id?: string) {
    const response = await Moralis.EvmApi.wallets
      .getWalletTokenBalancesPrice({
        address: walletAddress,
        chain: chain_id ? chain_id : EvmChain.ETHEREUM,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

  async getWalletTransactions(walletAddress: string, chain_id?: string) {
    const response = await Moralis.EvmApi.transaction
      .getWalletTransactionsVerbose({
        address: walletAddress,
        chain: chain_id ? chain_id : EvmChain.ETHEREUM,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

  async getWalletActiveChains(walletAddress: string) {
    const response = await Moralis.EvmApi.wallets
      .getWalletActiveChains({
        address: walletAddress,
        chains: this.supportedChains,
      })
      .then((chains) => {
        return chains.result.activeChains.filter((chain) => {
          return chain.firstTransaction != null;
        });
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

  //   async getWalletTransactions(walletAddress: string);

  // async getWalletBalance(walletAddress: string) {
  //     const response = await Moralis.EvmApi.wallets.getWalletTokenBalancesPrice({
  //         address: walletAddress,
  //         chain: '0x1',

  //     })
  //     .then(res => {
  //         // console.log(JSON.stringify(res, null, 2));
  //         console.log('os this even working')
  //         console.log(JSON.stringify(res.response.result, null, 2));
  //         return res;
  //     })
  //     .catch(error => {
  //         console.log(error);
  //     })
  // }
}

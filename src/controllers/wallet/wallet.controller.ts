/* eslint-disable */ 

import { Body, Controller, Post } from '@nestjs/common';
import { WalletService } from 'src/services/wallet/wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('balance')
  async getWalletBalance(@Body() body: any) {
    console.log(`getting balance for ${body.walletAddress}`);
    const res = await this.walletService.getWalletBalance(body.walletAddress, body?.chain_id);
    return res;
  }

  @Post('tokens')
  async getWalletTokens(@Body() body: any) {
    const res = await this.walletService.getWalletTokens(body.walletAddress, body?.chain_id);
    return res;
  }

  @Post('transactions')
  async getWalletTransactions(@Body() body: any) {
    const res = await this.walletService.getWalletTransactions(body.walletAddress, body?.chain_id);
    return res;
  }

  @Post('chains')
  async getWalletActiveChains(@Body() body: any) {
    console.log(`retrieve active chains for ${body.walletAddress}`)
    const res = await this.walletService.getWalletActiveChains(body.walletAddress);
    return res;
  }

}

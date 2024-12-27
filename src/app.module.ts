import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletService } from './services/wallet/wallet.service';
import { WalletController } from './controllers/wallet/wallet.controller';
import { MoralisConfigService } from './services/moralis/moralis.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  exports: [MoralisConfigService],
  controllers: [AppController, WalletController],
  providers: [AppService, WalletService, MoralisConfigService],
})
export class AppModule {}

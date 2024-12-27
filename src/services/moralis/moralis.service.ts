import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Moralis from 'moralis';

@Injectable()
export class MoralisConfigService {
  constructor(private configService: ConfigService) {
    this.initializeMoralis();
  }

  private initializeMoralis() {
    Moralis.start({
      apiKey: this.configService.get<string>('MORALIS_API_KEY'),
    });
  }
}

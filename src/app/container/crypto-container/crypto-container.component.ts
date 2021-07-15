import { Component, OnInit } from '@angular/core';
import {
  CryptoData,
  FetchCryptoDataService,
} from './fetch-crypto-data.service';

@Component({
  selector: 'app-crypto-container',
  templateUrl: './crypto-container.component.html',
  styleUrls: ['./crypto-container.component.scss'],
  providers: [FetchCryptoDataService],
})
export class CryptoContainerComponent implements OnInit {
  cryptoList: CryptoData[];

  constructor(public cryptoService: FetchCryptoDataService) {}

  ngOnInit(): void {
    this.cryptoList = this.cryptoService.getCryptoList();
    // this.cryptoList.subscribe()
  }
}

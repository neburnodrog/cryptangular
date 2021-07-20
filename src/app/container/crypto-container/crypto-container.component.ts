import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CryptoAssetData } from './crypto.model';
import { GetCryptoDataService } from './get-crypto-data.service';

@Component({
  selector: 'app-crypto-container',
  templateUrl: './crypto-container.component.html',
  styleUrls: ['./crypto-container.component.scss'],
})
export class CryptoContainerComponent implements OnInit {
  cryptoList: CryptoAssetData[];
  dataSource: MatTableDataSource<CryptoAssetData>;

  constructor(public cryptoService: GetCryptoDataService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptoList().subscribe((cryptoResponse) => {
      console.log(cryptoResponse);
      this.cryptoList = cryptoResponse.data;
      this.dataSource = new MatTableDataSource(this.cryptoList);
    });
  }

  getDetailRoute(id: string) {
    return '/crypto/' + id;
  }
}

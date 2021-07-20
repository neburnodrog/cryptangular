import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoAssetData } from '../crypto.model';
import { GetCryptoDataService } from '../get-crypto-data.service';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss'],
})
export class CryptoDetailsComponent implements OnInit {
  id: string;
  interval: string = 'd1';
  cryptoData: CryptoAssetData;

  constructor(
    private cryptoService: GetCryptoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cryptoService.getCryptoAsset(this.id).subscribe((resp) => {
      this.cryptoData = resp.data;
    });
  }
}

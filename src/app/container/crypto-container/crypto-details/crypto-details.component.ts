import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TimeResolver } from '../../servers-container/services/time-resolver.service';
import { CryptoAssetData } from '../crypto.model';
import { GetCryptoDataService } from '../get-crypto-data.service';
import cryptoList from './filtered.json';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss'],
})
export class CryptoDetailsComponent implements OnInit {
  id: string;
  interval: string = 'd1';
  startDate: number;
  endDate: number;
  cryptoIdList: { id: string }[] = cryptoList;
  cryptoData: CryptoAssetData;

  constructor(
    private cryptoService: GetCryptoDataService,
    private route: ActivatedRoute,
    private timeResolver: TimeResolver
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.endDate = this.timeResolver.getDate();
    this.startDate = this.timeResolver.getOneMonthAgo(this.endDate);
    this.cryptoService.getCryptoAsset(this.id).subscribe((resp) => {
      this.cryptoData = resp.data;
    });
  }

  onRerender(value: { startDate: string; endDate: string; newId: string }) {
    this.startDate = new Date(value.startDate).valueOf();
    this.endDate = new Date(value.endDate).valueOf();
    this.id = value.newId;
  }
}

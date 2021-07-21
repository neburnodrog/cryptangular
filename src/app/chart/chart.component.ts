import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {
  CryptoHistoryData,
  HistoryResponse,
} from '../container/crypto-container/crypto.model';
import { GetCryptoDataService } from '../container/crypto-container/get-crypto-data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() id: string;
  @Input() name: string;
  @Input() interval: string;
  chartOptions: Highcharts.Options;
  data: CryptoHistoryData[];

  constructor(private cryptoService: GetCryptoDataService) {}

  ngOnInit(): void {
    this.cryptoService
      .getCryptoHistory(this.id, this.interval)
      .subscribe((resp: HistoryResponse) => {
        this.data = resp.data;

        this.chartOptions = {
          title: {
            text: `${this.name} history`,
          },
          xAxis: {
            title: { text: 'Time' },
            type: 'datetime',
            plotBands: [
              {
                from: this.data[0].time,
                to: this.data[this.data.length - 1].time,
              },
            ],
          },
          yAxis: {
            title: { text: 'Price (USD)' },
          },
          series: [
            {
              name: this.name,
              data: this.data.map((time) => +time.priceUsd),
              type: 'line',
            },
          ],
        };
      });
  }
}

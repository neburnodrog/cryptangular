import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class ChartComponent implements OnInit, OnChanges {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() id: string;
  @Input() name: string;
  @Input() interval: string;
  @Input() startDate: number;
  @Input() endDate: number;
  chartOptions: Highcharts.Options;
  data: CryptoHistoryData[];

  constructor(private cryptoService: GetCryptoDataService) {}

  getHistoryData(startDate: number, endDate: number) {
    this.cryptoService
      .getCryptoHistory(this.id, this.interval, startDate, endDate)
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
              data: this.data.map((dataPoint) => +dataPoint.priceUsd),
              type: 'line',
            },
          ],
        };
      });
  }

  ngOnChanges() {
    console.log(this.startDate);
    console.log(this.endDate);
    this.getHistoryData(this.startDate, this.endDate);
  }

  ngOnInit(): void {
    this.getHistoryData(this.startDate, this.endDate);
  }
}

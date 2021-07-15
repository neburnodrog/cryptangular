import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.scss'],
})
export class ChartsContainerComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [1, 2, 3],
        type: 'line',
      },
      {
        data: [5, 4, 2],
        type: 'line',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}

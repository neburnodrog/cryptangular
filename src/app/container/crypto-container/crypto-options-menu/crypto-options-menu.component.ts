import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crypto-options-menu',
  templateUrl: './crypto-options-menu.component.html',
  styleUrls: ['./crypto-options-menu.component.scss'],
})
export class CryptoOptionsMenuComponent implements OnInit {
  @Input() cryptoId: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() cryptoIdList: { id: string }[];
  @Output() rerender = new EventEmitter<{
    startDate: string;
    endDate: string;
    newId: string;
  }>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goBack = () => this.router.navigate(['../'], { relativeTo: this.route });

  reRender = () => {
    this.rerender.emit({
      startDate: this.startDate,
      endDate: this.endDate,
      newId: this.cryptoId,
    });
  };
}

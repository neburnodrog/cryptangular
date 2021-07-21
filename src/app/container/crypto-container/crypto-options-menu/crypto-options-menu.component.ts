import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crypto-options-menu',
  templateUrl: './crypto-options-menu.component.html',
  styleUrls: ['./crypto-options-menu.component.scss'],
})
export class CryptoOptionsMenuComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

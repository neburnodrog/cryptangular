import { Component, Input, OnInit } from '@angular/core';

import { Server } from '../server.model';

@Component({
  selector: 'app-servers-display',
  templateUrl: './servers-display.component.html',
  styleUrls: ['./servers-display.component.scss'],
})
export class ServersDisplayComponent implements OnInit {
  @Input() servers: Server[];

  constructor() {}

  // onStatusToggled() {

  // }

  ngOnInit(): void {}
}

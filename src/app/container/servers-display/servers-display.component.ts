import { Component, OnInit } from '@angular/core';

import { Server } from './server.model';

@Component({
  selector: 'app-servers-display',
  templateUrl: './servers-display.component.html',
  styleUrls: ['./servers-display.component.scss'],
})
export class ServersDisplayComponent implements OnInit {
  servers: Server[] = [
    new Server(1, 'Test1', 'Test server 1', Math.random() > 0.5),
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @Input() server: Server;

  constructor() {}

  getColor() {
    return this.server.status ? 'green' : 'red';
  }

  getClasses() {
    return this.server.status ? 'online' : 'offline';
  }

  ngOnInit(): void {}
}

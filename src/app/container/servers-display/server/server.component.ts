import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  hideDescription: boolean = true;
  @Input() server: Server;

  constructor() {}

  getColor() {
    return this.server.status ? 'green' : 'red';
  }

  getClasses() {
    return this.server.status ? 'online' : 'offline';
  }

  onToggleStatus(newServerStatus: boolean) {
    this.server.status = newServerStatus;
  }

  ngOnInit(): void {}
}

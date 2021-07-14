import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  // @Output() toggleStatus = new EventEmitter<boolean>();

  constructor() {}

  getColor() {
    return this.server.status ? 'green' : 'red';
  }

  getClasses() {
    return this.server.status ? 'online' : 'offline';
  }

  onToggleStatus(newServerStatus: boolean) {
    this.server.status = newServerStatus;
    // this.toggleStatus.emit(newServerStatus);
  }

  ngOnInit(): void {}
}

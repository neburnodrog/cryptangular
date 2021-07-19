import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../../models/server.model';
import { ServersService } from '../../services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.scss'],
})
export class ServerComponent implements OnInit {
  hideDescription: boolean = true;
  @Input() server: Server;

  constructor(public serverService: ServersService) {}

  getColor() {
    return this.server.status ? 'green' : 'red';
  }

  getClasses() {
    return this.server.status ? 'online' : 'offline';
  }

  ngOnInit(): void {}
}

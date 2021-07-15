import { Component, OnInit } from '@angular/core';

import { Server } from './models/server.model';
import { ServersService } from './services/servers.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [ServersService],
})
export class ContainerComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serversService: ServersService) {}

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }
}

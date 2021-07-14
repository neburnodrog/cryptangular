import { Component, OnInit } from '@angular/core';
import { ServersService } from '../services/servers.service';
import { Server } from './server.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [ServersService],
})
export class ContainerComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serversService: ServersService) {}

  onServerCreated(serverData: {
    serverName: string;
    description: string;
    init: boolean;
  }) {
    const newServerId = this.servers.length + 1;
    const { serverName, description, init } = serverData;

    this.serversService.addServer(
      new Server(newServerId, serverName, description, init)
    );
  }

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }
}

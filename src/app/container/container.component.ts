import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  servers: Server[] = [
    new Server(1, 'Test1', 'Test server 1', Math.random() > 0.5),
  ];

  constructor() {}

  onServerCreated(serverData: {
    serverName: string;
    description: string;
    init: boolean;
  }) {
    const newServerId = this.servers.length + 1;
    const { serverName, description, init } = serverData;

    this.servers.push(new Server(newServerId, serverName, description, init));
  }

  ngOnInit(): void {}
}

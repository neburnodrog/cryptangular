import { Component, OnInit } from '@angular/core';

import { Server } from '../models/server.model';
import { ServersService } from 'src/app/container/services/servers.service';

@Component({
  selector: 'app-servers-display',
  templateUrl: './servers-display.component.html',
  styleUrls: ['./servers-display.component.scss'],
})
export class ServersDisplayComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serversService: ServersService) {}

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }
}

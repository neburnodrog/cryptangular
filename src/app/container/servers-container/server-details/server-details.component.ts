import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../models/server.model';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.scss'],
})
export class ServerDetailsComponent implements OnInit {
  server: Server;

  constructor(
    public route: ActivatedRoute,
    public serversService: ServersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServerById(id);
  }
}

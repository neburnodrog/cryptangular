import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Server } from '../models/server.model';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.scss'],
})
export class ServerDetailsComponent implements OnInit {
  server: Server;
  nextId: number;
  prevId: number;

  constructor(
    public route: ActivatedRoute,
    public serversService: ServersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServerById(id);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServerById(params['id']);
    });
  }
}

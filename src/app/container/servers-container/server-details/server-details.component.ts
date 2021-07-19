import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
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
    public router: Router,
    public route: ActivatedRoute,
    public serversService: ServersService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });

    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServerById(id);

    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServerById(params['id']);
    // });
  }

  onStatusChange = () => {
    this.serversService.updateStatus(this.server);
  };

  onDeleteServer() {
    if (confirm('Are you sure you want to delete this server?')) {
      this.serversService.deleteServer(this.server);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}

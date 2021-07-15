import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../../servers-container/models/server.model';
import { ServersService } from '../../servers-container/services/servers.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss'],
})
export class ServerEditComponent implements OnInit, DoCheck {
  server: Server;
  serverName: string;
  serverDesc: string;
  invalidServerLength = false;

  constructor(
    public route: ActivatedRoute,
    public serversService: ServersService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServerById(id);
    this.serverName = this.server.name;
    this.serverDesc = this.server.description;
  }

  onSaveChanges() {
    this.server.name = this.serverName;
    this.server.description = this.serverDesc;
    this.router.navigate(['/servers', this.server.id]);
  }

  onDiscardChanges() {
    this.serverName = this.server.name;
    this.serverDesc = this.server.description;
  }

  ngDoCheck() {
    this.serverName.length > 20
      ? (this.invalidServerLength = true)
      : (this.invalidServerLength = false);
  }
}

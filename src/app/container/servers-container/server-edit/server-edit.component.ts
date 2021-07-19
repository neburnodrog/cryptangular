import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from '../models/server.model';
import { ServersService } from '../services/servers.service';
import { CanComponentDeactivate } from './can-deactivate.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss'],
})
export class ServerEditComponent
  implements OnInit, DoCheck, CanComponentDeactivate
{
  server: Server;
  serverName: string;
  serverDesc: string;
  invalidServerLength = false;
  changesSaved = false;

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

  ngDoCheck() {
    this.serverName.length > 20
      ? (this.invalidServerLength = true)
      : (this.invalidServerLength = false);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (
      (this.serverName !== this.server.name ||
        this.serverDesc !== this.server.description) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  onSaveChanges() {
    this.serversService.updateNameAndDescription(
      this.server.id,
      this.serverName,
      this.serverDesc
    );

    this.changesSaved = true;

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDiscardChanges() {
    this.serverName = this.server.name;
    this.serverDesc = this.server.description;
  }
}

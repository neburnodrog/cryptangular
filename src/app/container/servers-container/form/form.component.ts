import { Component, OnInit, DoCheck } from '@angular/core';

import { ServersService } from 'src/app/container/servers-container/services/servers.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, DoCheck {
  serverName = '';
  description = '';
  initStatus: boolean = false;

  constructor(private serversService: ServersService) {}

  onCreateServer() {
    this.serversService.addServer(
      this.serverName,
      this.description,
      this.initStatus
    );
  }

  ngDoCheck() {
    if (this.serverName.length >= 22) {
      this.serverName = this.serverName.slice(0, 20);
      alert('The name of the server cannot be longer than 20 chars');
    }
  }

  ngOnInit(): void {}
}

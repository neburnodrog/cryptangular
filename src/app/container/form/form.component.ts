import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  description = '';
  serverCreationStatus = 'no server was created';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(e: MouseEvent) {
    this.serverCreationStatus =
      'Server was created with name: ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(e: InputEvent) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  onUpdateDesc(e: InputEvent) {
    this.description = (<HTMLInputElement>e.target).value;
  }

  ngOnInit(): void {}
}

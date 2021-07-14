import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnChanges, DoCheck {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    description: string;
    init: boolean;
  }>();
  serverName = '';
  description = '';
  init: boolean = false;

  constructor() {}

  onCreateServer(description: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.serverName,
      description: description.value,
      init: this.init,
    });
  }

  ngDoCheck(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersDisplayComponent } from './servers-display.component';

describe('ServersDisplayComponent', () => {
  let component: ServersDisplayComponent;
  let fixture: ComponentFixture<ServersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

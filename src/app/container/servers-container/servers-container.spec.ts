import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersContainerComponent } from './servers-container.component';

describe('ServersComponent', () => {
  let component: ServersContainerComponent;
  let fixture: ComponentFixture<ServersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServersContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

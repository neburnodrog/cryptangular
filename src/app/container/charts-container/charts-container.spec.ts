import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsContainerComponent } from './charts-container.component';

describe('ChartsComponent', () => {
  let component: ChartsContainerComponent;
  let fixture: ComponentFixture<ChartsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

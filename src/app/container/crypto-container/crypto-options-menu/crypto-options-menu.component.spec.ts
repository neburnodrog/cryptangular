import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoOptionsMenuComponent } from './crypto-options-menu.component';

describe('CryptoOptionsMenuComponent', () => {
  let component: CryptoOptionsMenuComponent;
  let fixture: ComponentFixture<CryptoOptionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoOptionsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoOptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

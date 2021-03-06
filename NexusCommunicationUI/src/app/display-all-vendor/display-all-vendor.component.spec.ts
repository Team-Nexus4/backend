import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllVendorComponent } from './display-all-vendor.component';

describe('DisplayAllVendorComponent', () => {
  let component: DisplayAllVendorComponent;
  let fixture: ComponentFixture<DisplayAllVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

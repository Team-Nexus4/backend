import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceRetailerVendorComponent } from './replace-retailer-vendor.component';

describe('ReplaceRetailerVendorComponent', () => {
  let component: ReplaceRetailerVendorComponent;
  let fixture: ComponentFixture<ReplaceRetailerVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceRetailerVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceRetailerVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInternetstockVendorComponent } from './update-internetstock-vendor.component';

describe('UpdateInternetstockVendorComponent', () => {
  let component: UpdateInternetstockVendorComponent;
  let fixture: ComponentFixture<UpdateInternetstockVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInternetstockVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInternetstockVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

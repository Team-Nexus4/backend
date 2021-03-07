import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorViewOrdersComponent } from './vendor-view-orders.component';

describe('VendorViewOrdersComponent', () => {
  let component: VendorViewOrdersComponent;
  let fixture: ComponentFixture<VendorViewOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorViewOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

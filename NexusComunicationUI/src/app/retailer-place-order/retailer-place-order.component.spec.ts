import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerPlaceOrderComponent } from './retailer-place-order.component';

describe('RetailerPlaceOrderComponent', () => {
  let component: RetailerPlaceOrderComponent;
  let fixture: ComponentFixture<RetailerPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerPlaceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

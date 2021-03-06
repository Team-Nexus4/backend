import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerPlaceOrderStockComponent } from './retailer-place-order-stock.component';

describe('RetailerPlaceOrderStockComponent', () => {
  let component: RetailerPlaceOrderStockComponent;
  let fixture: ComponentFixture<RetailerPlaceOrderStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerPlaceOrderStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerPlaceOrderStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

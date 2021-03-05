import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDisplayOrderComponent } from './retailer-display-order.component';

describe('RetailerDisplayOrderComponent', () => {
  let component: RetailerDisplayOrderComponent;
  let fixture: ComponentFixture<RetailerDisplayOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerDisplayOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerDisplayOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

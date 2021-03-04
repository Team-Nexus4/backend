import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlandlineplanComponent } from './orderlandlineplan.component';

describe('OrderlandlineplanComponent', () => {
  let component: OrderlandlineplanComponent;
  let fixture: ComponentFixture<OrderlandlineplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlandlineplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlandlineplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderinternetplanComponent } from './orderinternetplan.component';

describe('OrderinternetplanComponent', () => {
  let component: OrderinternetplanComponent;
  let fixture: ComponentFixture<OrderinternetplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderinternetplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderinternetplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

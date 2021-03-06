import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderByTechnicalComponent } from './place-order-by-technical.component';

describe('PlaceOrderByTechnicalComponent', () => {
  let component: PlaceOrderByTechnicalComponent;
  let fixture: ComponentFixture<PlaceOrderByTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceOrderByTechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderByTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

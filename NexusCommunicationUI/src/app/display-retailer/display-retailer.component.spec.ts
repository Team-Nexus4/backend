import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRetailerComponent } from './display-retailer.component';

describe('DisplayRetailerComponent', () => {
  let component: DisplayRetailerComponent;
  let fixture: ComponentFixture<DisplayRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRetailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

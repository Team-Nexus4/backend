import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceRetailerComponent } from './replace-retailer.component';

describe('ReplaceRetailerComponent', () => {
  let component: ReplaceRetailerComponent;
  let fixture: ComponentFixture<ReplaceRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceRetailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

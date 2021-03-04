import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycustomerplanComponent } from './displaycustomerplan.component';

describe('DisplaycustomerplanComponent', () => {
  let component: DisplaycustomerplanComponent;
  let fixture: ComponentFixture<DisplaycustomerplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycustomerplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycustomerplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTechnicalComponent } from './display-technical.component';

describe('DisplayTechnicalComponent', () => {
  let component: DisplayTechnicalComponent;
  let fixture: ComponentFixture<DisplayTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

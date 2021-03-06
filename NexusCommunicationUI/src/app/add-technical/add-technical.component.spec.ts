import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnicalComponent } from './add-technical.component';

describe('AddTechnicalComponent', () => {
  let component: AddTechnicalComponent;
  let fixture: ComponentFixture<AddTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

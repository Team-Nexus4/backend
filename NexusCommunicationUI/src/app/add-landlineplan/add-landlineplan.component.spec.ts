import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandlineplanComponent } from './add-landlineplan.component';

describe('AddLandlineplanComponent', () => {
  let component: AddLandlineplanComponent;
  let fixture: ComponentFixture<AddLandlineplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLandlineplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLandlineplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

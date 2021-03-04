import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLandlineplanComponent } from './update-landlineplan.component';

describe('UpdateLandlineplanComponent', () => {
  let component: UpdateLandlineplanComponent;
  let fixture: ComponentFixture<UpdateLandlineplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLandlineplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLandlineplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

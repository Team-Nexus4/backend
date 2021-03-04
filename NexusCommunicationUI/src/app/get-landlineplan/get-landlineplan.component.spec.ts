import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLandlineplanComponent } from './get-landlineplan.component';

describe('GetLandlineplanComponent', () => {
  let component: GetLandlineplanComponent;
  let fixture: ComponentFixture<GetLandlineplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLandlineplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLandlineplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

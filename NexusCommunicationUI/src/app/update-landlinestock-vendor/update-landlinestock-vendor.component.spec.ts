import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLandlinestockVendorComponent } from './update-landlinestock-vendor.component';

describe('UpdateLandlinestockVendorComponent', () => {
  let component: UpdateLandlinestockVendorComponent;
  let fixture: ComponentFixture<UpdateLandlinestockVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLandlinestockVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLandlinestockVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

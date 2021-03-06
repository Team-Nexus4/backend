import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInternetComponent } from './get-internet.component';

describe('GetInternetComponent', () => {
  let component: GetInternetComponent;
  let fixture: ComponentFixture<GetInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

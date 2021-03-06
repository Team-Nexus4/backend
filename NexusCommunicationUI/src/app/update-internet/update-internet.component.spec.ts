import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInternetComponent } from './update-internet.component';

describe('UpdateInternetComponent', () => {
  let component: UpdateInternetComponent;
  let fixture: ComponentFixture<UpdateInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

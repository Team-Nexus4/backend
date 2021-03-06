import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInternetComponent } from './add-internet.component';

describe('AddInternetComponent', () => {
  let component: AddInternetComponent;
  let fixture: ComponentFixture<AddInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

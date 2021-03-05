import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontloginComponent } from './frontlogin.component';

describe('FrontloginComponent', () => {
  let component: FrontloginComponent;
  let fixture: ComponentFixture<FrontloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

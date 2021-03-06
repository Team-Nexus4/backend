import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanbillcomponentComponent } from './planbillcomponent.component';

describe('PlanbillcomponentComponent', () => {
  let component: PlanbillcomponentComponent;
  let fixture: ComponentFixture<PlanbillcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanbillcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanbillcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

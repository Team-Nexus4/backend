import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicaldashboardComponent } from './technicaldashboard.component';

describe('TechnicaldashboardComponent', () => {
  let component: TechnicaldashboardComponent;
  let fixture: ComponentFixture<TechnicaldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicaldashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

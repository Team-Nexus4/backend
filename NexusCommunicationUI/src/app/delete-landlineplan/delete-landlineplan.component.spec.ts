import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLandlineplanComponent } from './delete-landlineplan.component';

describe('DeleteLandlineplanComponent', () => {
  let component: DeleteLandlineplanComponent;
  let fixture: ComponentFixture<DeleteLandlineplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLandlineplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLandlineplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInternetComponent } from './delete-internet.component';

describe('DeleteInternetComponent', () => {
  let component: DeleteInternetComponent;
  let fixture: ComponentFixture<DeleteInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

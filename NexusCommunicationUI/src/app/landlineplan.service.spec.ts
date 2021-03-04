import { TestBed } from '@angular/core/testing';

import { LandlineplanService } from './landlineplan.service';

describe('LandlineplanService', () => {
  let service: LandlineplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandlineplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

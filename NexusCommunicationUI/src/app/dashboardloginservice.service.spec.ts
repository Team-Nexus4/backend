import { TestBed } from '@angular/core/testing';

import { DashboardloginserviceService } from './dashboardloginservice.service';

describe('DashboardloginserviceService', () => {
  let service: DashboardloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

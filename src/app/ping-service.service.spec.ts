import { TestBed } from '@angular/core/testing';

import { PingServiceService } from './ping-service.service';

describe('PingServiceService', () => {
  let service: PingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

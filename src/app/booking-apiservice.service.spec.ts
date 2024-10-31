import { TestBed } from '@angular/core/testing';

import { BookingAPIServiceService } from './booking-apiservice.service';

describe('BookingAPIServiceService', () => {
  let service: BookingAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

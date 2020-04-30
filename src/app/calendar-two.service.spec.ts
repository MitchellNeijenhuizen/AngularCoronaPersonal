import { TestBed } from '@angular/core/testing';

import { CalendarTwoService } from './calendar-two.service';

describe('CalendarTwoService', () => {
  let service: CalendarTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

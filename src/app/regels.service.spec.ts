import { TestBed } from '@angular/core/testing';

import { RegelsService } from './regels.service';

describe('RegelsService', () => {
  let service: RegelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

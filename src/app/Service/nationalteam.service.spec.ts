import { TestBed } from '@angular/core/testing';

import { NationalteamService } from './nationalteam.service';

describe('NationalteamService', () => {
  let service: NationalteamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalteamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

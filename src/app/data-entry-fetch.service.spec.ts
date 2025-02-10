import { TestBed } from '@angular/core/testing';

import { DataEntryFetchService } from './data-entry-fetch.service';

describe('DataEntryFetchService', () => {
  let service: DataEntryFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEntryFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

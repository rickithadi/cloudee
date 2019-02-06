import { TestBed } from '@angular/core/testing';

import { CloudyService } from './cloudy.service';

describe('CloudyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudyService = TestBed.get(CloudyService);
    expect(service).toBeTruthy();
  });
});

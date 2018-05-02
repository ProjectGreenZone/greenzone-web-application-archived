import { TestBed, inject } from '@angular/core/testing';

import { TrackerService } from './tracker.service';

describe('TrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackerService]
    });
  });

  it('should be created', inject([TrackerService], (service: TrackerService) => {
    expect(service).toBeTruthy();
  }));
});

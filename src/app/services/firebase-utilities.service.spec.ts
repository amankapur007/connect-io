import { TestBed } from '@angular/core/testing';

import { FirebaseUtilitiesService } from './firebase-utilities.service';

describe('FirebaseUtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseUtilitiesService = TestBed.get(FirebaseUtilitiesService);
    expect(service).toBeTruthy();
  });
});

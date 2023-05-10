import { TestBed } from '@angular/core/testing';

import { CandidatureResolver } from './candidature.resolver';

describe('CandidatureResolver', () => {
  let resolver: CandidatureResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CandidatureResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

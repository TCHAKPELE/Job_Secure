import { TestBed } from '@angular/core/testing';

import { AdminMissionResolver } from './admin-mission.resolver';

describe('AdminMissionResolver', () => {
  let resolver: AdminMissionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminMissionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

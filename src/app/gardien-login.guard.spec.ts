import { TestBed } from '@angular/core/testing';

import { GardienLoginGuard } from './gardien-login.guard';

describe('GardienLoginGuard', () => {
  let guard: GardienLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardienLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

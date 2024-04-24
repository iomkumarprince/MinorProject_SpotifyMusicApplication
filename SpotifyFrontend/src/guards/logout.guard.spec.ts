import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { logoutGuard } from './logout.guard';

describe('logoutGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logoutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

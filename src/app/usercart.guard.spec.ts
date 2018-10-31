import { TestBed, async, inject } from '@angular/core/testing';

import { UsercartGuard } from './usercart.guard';

describe('UsercartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsercartGuard]
    });
  });

  it('should ...', inject([UsercartGuard], (guard: UsercartGuard) => {
    expect(guard).toBeTruthy();
  }));
});

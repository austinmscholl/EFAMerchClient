import { TestBed } from '@angular/core/testing';

import { MensService } from './mens.service';

describe('MensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensService = TestBed.get(MensService);
    expect(service).toBeTruthy();
  });
});

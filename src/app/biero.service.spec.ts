import { TestBed } from '@angular/core/testing';

import { BieroService } from './biero.service';

describe('BieroService', () => {
  let service: BieroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BieroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

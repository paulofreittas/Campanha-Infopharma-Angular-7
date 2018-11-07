import { TestBed } from '@angular/core/testing';

import { DrogariaService } from './drogaria.service';

describe('DrogariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrogariaService = TestBed.get(DrogariaService);
    expect(service).toBeTruthy();
  });
});

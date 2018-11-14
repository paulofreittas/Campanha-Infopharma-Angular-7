import { TestBed } from '@angular/core/testing';

import { ContatoDrogariaService } from './contato-drogaria.service';

describe('ContatoDrogariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatoDrogariaService = TestBed.get(ContatoDrogariaService);
    expect(service).toBeTruthy();
  });
});

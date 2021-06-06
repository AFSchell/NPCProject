import { TestBed } from '@angular/core/testing';

import { SpellserviceService } from './spellservice.service';

describe('SpellserviceService', () => {
  let service: SpellserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

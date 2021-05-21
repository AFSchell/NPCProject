import { TestBed } from '@angular/core/testing';

import { NpcserviceService } from './npcservice.service';

describe('NpcserviceService', () => {
  let service: NpcserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

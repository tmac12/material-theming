import { TestBed } from '@angular/core/testing';

import { SyleManagerService } from './syle-manager.service';

describe('SyleManagerService', () => {
  let service: SyleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { CowService } from './cow.service';

describe('CowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CowService]
    });
  });

  it('should be created', inject([CowService], (service: CowService) => {
    expect(service).toBeTruthy();
  }));
});

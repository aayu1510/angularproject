import { TestBed, inject } from '@angular/core/testing';

import { CandidateserviceService } from './candidateservice.service';

describe('CandidateserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateserviceService]
    });
  });

  it('should be created', inject([CandidateserviceService], (service: CandidateserviceService) => {
    expect(service).toBeTruthy();
  }));
});

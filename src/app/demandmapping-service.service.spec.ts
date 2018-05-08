import { TestBed, inject } from '@angular/core/testing';

import { DemandmappingServiceService } from './demandmapping-service.service';

describe('DemandmappingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandmappingServiceService]
    });
  });

  it('should be created', inject([DemandmappingServiceService], (service: DemandmappingServiceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ProjectDemandServiceService } from './project-demand-service.service';

describe('ProjectDemandServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDemandServiceService]
    });
  });

  it('should be created', inject([ProjectDemandServiceService], (service: ProjectDemandServiceService) => {
    expect(service).toBeTruthy();
  }));
});

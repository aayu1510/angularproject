import { TestBed, inject } from '@angular/core/testing';

import { OnBoardingServiceService } from './on-boarding-service.service';

describe('OnBoardingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnBoardingServiceService]
    });
  });

  it('should be created', inject([OnBoardingServiceService], (service: OnBoardingServiceService) => {
    expect(service).toBeTruthy();
  }));
});

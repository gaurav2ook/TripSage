import { TestBed } from '@angular/core/testing';

import { TrainReservationService } from './train-reservation.service';

describe('TrainReservationService', () => {
  let service: TrainReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

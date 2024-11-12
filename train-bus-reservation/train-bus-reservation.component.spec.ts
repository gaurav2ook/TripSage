import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainBusReservationComponent } from './train-bus-reservation.component';

describe('TrainBusReservationComponent', () => {
  let component: TrainBusReservationComponent;
  let fixture: ComponentFixture<TrainBusReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainBusReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainBusReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryManagementComponent } from './itinerary-management.component';

describe('ItineraryManagementComponent', () => {
  let component: ItineraryManagementComponent;
  let fixture: ComponentFixture<ItineraryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItineraryManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItineraryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

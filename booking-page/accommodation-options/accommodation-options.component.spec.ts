import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationOptionsComponent } from './accommodation-options.component';

describe('AccommodationOptionsComponent', () => {
  let component: AccommodationOptionsComponent;
  let fixture: ComponentFixture<AccommodationOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

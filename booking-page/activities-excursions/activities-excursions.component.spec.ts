import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesExcursionsComponent } from './activities-excursions.component';

describe('ActivitiesExcursionsComponent', () => {
  let component: ActivitiesExcursionsComponent;
  let fixture: ComponentFixture<ActivitiesExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesExcursionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

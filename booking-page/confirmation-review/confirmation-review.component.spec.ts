import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationReviewComponent } from './confirmation-review.component';

describe('ConfirmationReviewComponent', () => {
  let component: ConfirmationReviewComponent;
  let fixture: ComponentFixture<ConfirmationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

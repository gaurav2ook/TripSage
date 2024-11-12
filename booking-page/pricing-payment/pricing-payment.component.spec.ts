import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPaymentComponent } from './pricing-payment.component';

describe('PricingPaymentComponent', () => {
  let component: PricingPaymentComponent;
  let fixture: ComponentFixture<PricingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrl: './paymentpage.component.css'
})
export class PaymentpageComponent {

  cardNumber = '';
  expMonth = '';
  expYear = '';
  cvv = '';
  cardholderName = '';

  editBooking() {
    window.history.back();
  }

  payWithPaypal() {
    console.log('Redirecting to PayPal...');
    // Implement PayPal integration here
  }

  makePayment() {
    console.log('Processing payment with the following details:', {
      cardNumber: this.cardNumber,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvv: this.cvv,
      cardholderName: this.cardholderName,
    });
    // Implement payment processing logic here
  }

}

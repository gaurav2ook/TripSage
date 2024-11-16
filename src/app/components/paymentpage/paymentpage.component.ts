import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrl: './paymentpage.component.css'
})
export class PaymentpageComponent {
  bookingData = {
    serviceType: 'Hotel Booking',
    location: 'Paris, France',
    checkinDate: 'Dec 12, 2024',
    checkoutDate: 'Dec 15, 2024',
    packageDuration: 3,
    totalAmount: 600
  };

  selectedPaymentMethod: string = '';
  cardNumber: string = '';
  expMonth: string = '';
  expYear: string = '';
  cvv: string = '';
  cardholderName: string = '';
  upiId: string = '';

  editBooking() {
    alert('Editing booking...');
  }

  makePayment() {
    switch (this.selectedPaymentMethod) {
      case 'Credit Card':
        this.processCreditCardPayment();
        break;
      case 'UPI':
        this.payWithUPI();
        break;
      case 'Google Pay':
        this.payWithGooglePay();
        break;
      case 'PayPal':
        this.payWithPaypal();
        break;
      default:
        alert('Please select a payment method.');
    }
  }

  processCreditCardPayment() {
    alert(`Processing credit card payment for ${this.cardholderName}`);
    // Implement actual credit card payment logic
  }

  payWithUPI() {
    alert(`Processing UPI payment with ID: ${this.upiId}`);
    // Implement UPI payment logic
  }

  payWithGooglePay() {
    alert('Redirecting to Google Pay...');
    // Implement Google Pay payment logic
  }

  payWithPaypal() {
    alert('Redirecting to PayPal...');
    // Implement PayPal payment logic
  }

}
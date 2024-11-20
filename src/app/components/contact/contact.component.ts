import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  private formspreeEndpoint = 'https://formspree.io/f/mgveyjyj';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';

      this.http.post(this.formspreeEndpoint, this.contactForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.successMessage = 'Your message has been sent successfully!';
          this.contactForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.errorMessage = 'There was an error sending your message. Please try again later.';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all the required fields.';
    }
  }
}

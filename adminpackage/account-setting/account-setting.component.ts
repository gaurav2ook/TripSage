// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-account-setting',
//   templateUrl: './account-setting.component.html',
//   styleUrl: './account-setting.component.css'
// })
// export class AccountSettingComponent implements OnInit {
//     accountSettingsForm: FormGroup;
//     adminName: string = 'Admin Name'; // This should come from a service (e.g., auth service)
//     adminEmail: string = 'admin@example.com';
//     adminRole: string = 'Administrator';
  
//     constructor(private fb: FormBuilder) { }
  
//     ngOnInit(): void {
//       this.initializeForm();
//     }
  
//     initializeForm(): void {
//       this.accountSettingsForm = this.fb.group({
//         fullName: [this.adminName, [Validators.required, Validators.minLength(3)]],
//         email: [this.adminEmail, [Validators.required, Validators.email]],
//         password: ['', [Validators.minLength(6)]],
//         confirmPassword: ['', [Validators.minLength(6)]]
//       }, {
//         validators: this.passwordMatchValidator
//       });
//     }
  
//     passwordMatchValidator(form: FormGroup): null | object {
//       const password = form.get('password');
//       const confirmPassword = form.get('confirmPassword');
//       return password?.value === confirmPassword?.value ? null : { mismatch: true };
//     }
  
//     onSubmit(): void {
//       if (this.accountSettingsForm.valid) {
//         console.log('Form Submitted', this.accountSettingsForm.value);
//         // Call the service to update the account details
//       } else {
//         console.log('Form is invalid');
//       }
//     }
//   }
  
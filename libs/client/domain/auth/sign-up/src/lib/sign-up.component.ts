import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';

import { PasswordValidators } from '@jjmusic-nx-monorepo/client/shared/validators';

@Component({
  standalone: true,
  selector: 'auth-sign-up',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    RouterModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  passwordVisible = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            PasswordValidators.createStrengthValidator({
              minLength: 10,
              requireUppercase: true,
              requireLowercase: true,
              requireNumbers: true,
              requireSpecialChars: true,
              checkCommonPatterns: true,
            }),
          ],
        ],
        terms: [false, [Validators.required, Validators.requiredTrue]],
        privacy: [false, [Validators.required, Validators.requiredTrue]],
        analytics: [false],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: PasswordValidators.matchPassword(),
      },
    );
  }

  // Helper method to get password error message
  getPasswordErrorMessages(): string[] {
    const passwordControl = this.signUpForm.get('password');
    if (passwordControl?.dirty && passwordControl?.errors) {
      return PasswordValidators.getErrorMessages(passwordControl.errors);
    }
    return [];
  }

  // Method to check if passwords match
  hasPasswordMismatchError(): boolean {
    const confirmPasswordControl = this.signUpForm.get('confirmPassword');
    if (!confirmPasswordControl) {
      return false;
    }
    return (
      confirmPasswordControl.dirty &&
      confirmPasswordControl.hasError('passwordMismatch')
    );
  }

  onSubmit(): void {
    console.debug('Form submitted');
    console.log('form valid: ', this.signUpForm.valid);
    console.log('form value: ', this.signUpForm.value);
    if (this.signUpForm.valid) {
      // Handle form submission
      console.log(this.signUpForm.value);
    } else {
      // Mark all fields as touched to trigger validation visuals
      this.signUpForm.markAllAsTouched();
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}

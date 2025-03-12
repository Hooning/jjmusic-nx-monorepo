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
        terms: [false, [Validators.required]],
        privacy: [false, [Validators.required]],
        analytics: [false],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  // Additional validator to check if passwords match
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Helper method to get password error message
  getPasswordErrorMessages(): string[] {
    const passwordControl = this.signUpForm.get('password');
    if (passwordControl?.dirty && passwordControl?.errors) {
      return PasswordValidators.getErrorMessages(passwordControl.errors);
    }
    return [];
  }

  onSubmit(): void {
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

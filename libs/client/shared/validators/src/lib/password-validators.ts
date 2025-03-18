import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class PasswordValidators {
  /**
   * Validates password strength based on minimum requirements
   * @returns ValidatorFn that checks for minimum length, character variety, and common patterns
   */
  static createStrengthValidator(
    options: {
      minLength?: number;
      requireUppercase?: boolean;
      requireLowercase?: boolean;
      requireNumbers?: boolean;
      requireSpecialChars?: boolean;
      checkCommonPatterns?: boolean;
    } = {},
  ): ValidatorFn {
    // Default options
    const config = {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      checkCommonPatterns: true,
      ...options,
    };

    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value || '';

      if (!value) {
        return null; // Don't validate empty values to avoid confusion with required validator
      }

      const errors: ValidationErrors & {
        minLength?: { required: number; actual: number };
        requireUppercase?: boolean;
        requireLowercase?: boolean;
        requireNumbers?: boolean;
        requireSpecialChars?: boolean;
        commonPattern?: boolean;
        sequentialPattern?: boolean;
        repeatedChars?: boolean;
      } = {};

      // Check minimum length
      if (value.length < config.minLength) {
        errors['minLength'] = {
          required: config.minLength,
          actual: value.length,
        };
      }

      // Check for uppercase letters
      if (config.requireUppercase && !/[A-Z]/.test(value)) {
        errors['requireUppercase'] = true;
      }

      // Check for lowercase letters
      if (config.requireLowercase && !/[a-z]/.test(value)) {
        errors['requireLowercase'] = true;
      }

      // Check for numbers
      if (config.requireNumbers && !/[0-9]/.test(value)) {
        errors['requireNumbers'] = true;
      }

      // Check for special characters
      if (
        config.requireSpecialChars &&
        !/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(value)
      ) {
        errors['requireSpecialChars'] = true;
      }

      // Check for common patterns
      if (config.checkCommonPatterns) {
        // Common dictionary words to avoid
        const commonPasswords = [
          'password',
          'admin',
          'welcome',
          'letmein',
          'qwerty',
          '123456',
          'abc123',
        ];

        // Check if password contains or is similar to common passwords
        if (
          commonPasswords.some((common) =>
            value.toLowerCase().includes(common.toLowerCase()),
          )
        ) {
          errors['commonPattern'] = true;
        }

        // Check for sequential patterns
        if (
          /123|234|345|456|567|678|789|987|876|765|654|543|432|321/.test(
            value,
          ) ||
          /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/.test(
            value.toLowerCase(),
          )
        ) {
          errors['sequentialPattern'] = true;
        }

        // Check for repeated characters
        if (/(.)\1{2,}/.test(value)) {
          errors['repeatedChars'] = true;
        }
      }

      return Object.keys(errors).length > 0 ? errors : null;
    };
  }

  /**
   * Validates that confirmPassword matches password
   * @param passwordControlName The name of the password control to compare against
   * @param confirmPasswordControlName The name of the confirm password control
   * @returns ValidatorFn that checks if password and confirmPassword match
   */
  static matchPassword(
    passwordControlName = 'password',
    confirmPasswordControlName = 'confirmPassword',
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!(control instanceof FormGroup)) {
        return null;
      }

      const passwordControl = control.get(passwordControlName);
      const confirmPasswordControl = control.get(confirmPasswordControlName);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      // Don't validate if confirmPassword is empty or if password field has validation errors
      if (!confirmPasswordControl.value || passwordControl.errors) {
        return null;
      }

      // If passwords don't match, set error on confirmPassword control
      if (passwordControl.value !== confirmPasswordControl.value) {
        const error = { passwordMismatch: true };
        confirmPasswordControl.setErrors(error);
        return error;
      }

      // Reset error if it was previously set and passwords now match
      if (confirmPasswordControl.errors?.['passwordMismatch']) {
        // Create a copy of current errors without the passwordMismatch error
        const errors = { ...confirmPasswordControl.errors };
        delete errors['passwordMismatch'];

        // Set null or remaining errors
        confirmPasswordControl.setErrors(
          Object.keys(errors).length > 0 ? errors : null,
        );
      }

      return null;
    };
  }

  /**
   * Helper method that returns a user-friendly error message based on validation errors
   */
  static getErrorMessages(errors: ValidationErrors | null): string[] {
    if (!errors) return [];

    const messages: string[] = [];

    if (errors['minLength']) {
      messages.push(
        `암호는 최소한 ${errors['minLength'].required} 자리 이상이어야 합니다.\n`,
      );
    }
    if (errors['requireUppercase']) {
      messages.push('적어도 하나의 대문자를 포함해야 합니다.\n');
    }
    if (errors['requireLowercase']) {
      messages.push('적어도 하나의 소문자를 포함해야 합니다.\n');
    }
    if (errors['requireNumbers']) {
      messages.push('적어도 하나의 숫자를 포함해야 합니다.\n');
    }
    if (errors['requireSpecialChars']) {
      messages.push(
        '적어도 하나의 특수 문자를 포함해야 합니다 (!@#$%^&*...).\n',
      );
    }
    if (errors['commonPattern']) {
      messages.push('일반적인 단어 또는 패턴을 피하세요.\n');
    }
    if (errors['sequentialPattern']) {
      messages.push('연속된 문자를 피하세요 (123, abc).\n');
    }
    if (errors['repeatedChars']) {
      messages.push('반복된 문자를 피하세요');
    }

    return messages;
  }
}

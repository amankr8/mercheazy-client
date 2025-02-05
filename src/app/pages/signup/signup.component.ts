import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.snackBar.open('Please fill all required fields!', 'Close', {
        duration: 3000,
      });
      return;
    }

    if (
      this.signupForm.value.password !== this.signupForm.value.confirmPassword
    ) {
      this.snackBar.open('Passwords do not match!', 'Close', {
        duration: 3000,
      });
      return;
    }

    this.loading = true; // Start loading
    this.authService.signup(this.signupForm.value).subscribe({
      next: (response) => {
        this.loading = false; // Stop loading
        this.snackBar.open('Signup successful!', 'Close', { duration: 3000 });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false; // Stop loading
        this.snackBar.open('Signup failed. Try again!', 'Close', {
          duration: 3000,
        });
        console.error(err);
      },
    });
  }
}

import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.snackBar.open('Please fill all required fields!', 'Close', {
        duration: 3000,
      });
      return;
    }

    this.authService.signup(this.signupForm.value).subscribe({
      next: (response) => {
        this.snackBar.open('Signup successful!', 'Close', { duration: 3000 });
        // this.router.navigate(['/login']);
      },
      error: (err) => {
        this.snackBar.open('Signup failed. Try again!', 'Close', {
          duration: 3000,
        });
        console.error(err);
      },
    });
  }
}

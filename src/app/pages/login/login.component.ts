import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please fill all required fields!', 'Close', {
        duration: 3000,
      });
      return;
    }

    this.loading = true; // Start loading
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.loading = false; // Stop loading
        localStorage.setItem('token', response.token);
        this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false; // Stop loading
        this.snackBar.open('Login failed. Try again!', 'Close', {
          duration: 3000,
        });
        console.error(err);
      },
    });
  }
}

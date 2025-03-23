import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-oauth2-redirect',
  imports: [],
  templateUrl: './oauth2-redirect.component.html',
  styleUrl: './oauth2-redirect.component.scss',
})
export class Oauth2RedirectComponent {
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const code = params['code'];
      if (code) {
        this.authService.exchangeCodeForToken(code).subscribe({
          next: (response) => {
            this.loading = false;
            localStorage.setItem('token', response.token);
            this.snackBar.open('Login successful!', 'Close', {
              duration: 3000,
            });
            this.router.navigate(['/']);
          },
          error: (err) => {
            this.loading = false;
            this.snackBar.open('Login failed. Try again!', 'Close', {
              duration: 3000,
            });
            this.router.navigate(['/login']);
            console.error(err);
          },
        });
      }
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-oauth2-redirect',
  imports: [],
  templateUrl: './oauth2-redirect.component.html',
  styleUrl: './oauth2-redirect.component.scss',
})
export class Oauth2RedirectComponent {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const code = params['code'];
      if (code) {
        this.authService.exchangeCodeForToken(code).subscribe({
          next: (res) => {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error('Google login failed!', err);
            this.router.navigate(['/login']);
          },
        });
      }
    });
  }
}

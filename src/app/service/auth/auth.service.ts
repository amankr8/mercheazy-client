import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/api/auth';

  constructor(private http: HttpClient) {}

  signup(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  loginWithGoogle(): void {
    const googleOAuthUrl =
      'https://accounts.google.com/o/oauth2/auth' +
      '?client_id=' +
      environment.googleClientId +
      '&redirect_uri=' +
      environment.frontendUrl +
      '/oauth2/callback' +
      '&response_type=code' +
      '&scope=email profile openid';
    window.location.href = googleOAuthUrl;
  }

  getTokenByAuthCode(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/google-login?code=${code}`);
  }
}

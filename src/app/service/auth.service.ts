import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://mercheazy-server.onrender.com/api/auth';

  constructor(private http: HttpClient) {}

  signup(user: {
    username: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}

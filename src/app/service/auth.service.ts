import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.baseUrl + '/api/auth';

  constructor(private http: HttpClient) {}

  signup(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}

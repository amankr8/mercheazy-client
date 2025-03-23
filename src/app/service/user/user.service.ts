import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.baseUrl + '/api/users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  public getLoginUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current`);
  }
}

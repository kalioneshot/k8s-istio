import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

  // usersUrl = `${environment.apiUrl}users.json`;

  url = '/api/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUsersByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(this.url + '?name=' + name);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  public updateUser(user: User) {
    return this.http.put<User>('this.url/user.id', user);
  }

}

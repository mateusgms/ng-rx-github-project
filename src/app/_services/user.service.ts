import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users, UsersAPI } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(nameValue?: string): Observable<any> {

    let paramsDefault = new HttpParams().append('per_page', '9');
    let users = nameValue ? 'users/' + nameValue : 'users';
    return this.httpClient.get<UsersAPI>(environment.api + users, { params: paramsDefault })
      .pipe(
        tap((v) => console.log(v))
      )
  }
  getUser(userName: string): Observable<any> {
    return this.httpClient.get(environment.api + 'users/' + userName);
  }
}

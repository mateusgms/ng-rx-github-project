import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsuarios(since): Observable<any> {
    return this.http.get(environment.api + 'users?since=' + since + '&per_page=25', { observe: 'response' });
  }
  getUsuario(userName: string): Observable<any> {
    return this.http.get(environment.api + 'users/' + userName);
  }
}

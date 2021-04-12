import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  getRepositorios(userName: string): Observable<any> {
    return this.http.get(environment.api + "users/" + userName + "/repos");
  }
  getRepositorio(userName: string, repoName: string): Observable<any> {
    return this.http.get(environment.api + "repos/" + userName + "/" + repoName);
  }
}

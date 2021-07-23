import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/types/users.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endPoint = environment.apiUrl + '/v1/users';

  constructor(private httpClient: HttpClient) { }

  getByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(this.endPoint + '/by-email', {params: new HttpParams().append('email', email)});
  }
}

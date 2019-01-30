import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { usuarioIdFkNavigation } from '../../_models';
  
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<usuarioIdFkNavigation>;
  public currentUser: Observable<usuarioIdFkNavigation>;

  private readonly PATH: string = 'authorization';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<usuarioIdFkNavigation>(JSON.parse(localStorage.getItem('infopharmaUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): usuarioIdFkNavigation {
    if (localStorage['infopharmaUser'])
      return JSON.parse(localStorage.getItem('infopharmaUser'));
    return null;
  }

  logar(username: string, password: string): Observable<any> {
    return this.http.post<any>(env.baseApiUrl + this.PATH, { username, password })
    .pipe(map(func => {
        if (func && func.token) {
           localStorage.setItem('infopharmaUser', JSON.stringify(func));
           this.currentUserSubject.next(func);
        }
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('infopharmaUser');
    this.currentUserSubject.next(null);
  }


}

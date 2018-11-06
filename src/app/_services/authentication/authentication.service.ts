import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { funcionario } from '../../_models';
  
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<funcionario>;
  public currentUser: Observable<funcionario>;

  private readonly PATH: string = 'authorization';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<funcionario>(JSON.parse(localStorage.getItem('infopharmaUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): funcionario {
    return this.currentUserSubject.value;
  }

  logar(login: string, senha: string): Observable<any> {
    return this.http.post<any>(env.baseApiUrl + this.PATH, { login, senha })
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

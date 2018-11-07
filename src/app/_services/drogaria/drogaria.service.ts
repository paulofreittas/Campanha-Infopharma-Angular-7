import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { drogaria } from '../../_models';

@Injectable({
  providedIn: 'root'
})
export class DrogariaService {

  private readonly PATH: string = 'drogaria';

  constructor(private http: HttpClient) { }

  listarTodasDrogarias() : Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH);
  }
}

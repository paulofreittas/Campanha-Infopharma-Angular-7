import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { contatoDrogaria } from 'src/app/_models';

@Injectable({
  providedIn: 'root'
})
export class ContatoDrogariaService {

  private readonly PATH: string = 'contatoDrogaria';

  constructor(private http: HttpClient) { }

  add(ctDrogaria: contatoDrogaria) : Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, ctDrogaria);
  }

  findByDrogariaId(id: number) : Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + "?drogariaId=" + id)
  }

  findByFuncionarioId(funcionarioId: number, search: string, page: number) : Observable<any> {
    if (search == null) {
      return this.http.get(env.baseApiUrl + this.PATH + "?funcionarioId=" + funcionarioId)
    } 
    else {
      return this.http.get(env.baseApiUrl + this.PATH + "?funcionarioId=" + funcionarioId + "&search=" + search + "&page=" + page)
    }
  }

  delete(id: number) {
    return this.http.delete(env.baseApiUrl + this.PATH + "/" + id);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { funcionario } from 'src/app/_models';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly PATH: string = 'funcionario';

  constructor(private http: HttpClient) { }

  listarFuncionarios(search: string) : Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + "?search=" + search);
  }

  findByFuncionarioId(id: number) : Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + "/" + id)
  }

  add(func: funcionario) : Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, func)
  }

  update(func: funcionario) : Observable<any> {
    return this.http.put(env.baseApiUrl + this.PATH, func)
  }

  delete(id: number) {
    return this.http.delete(env.baseApiUrl + this.PATH + "/" + id)
  }
}

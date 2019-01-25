import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrogariaService {

  private readonly PATH: string = 'cliente';

  constructor(private http: HttpClient) { }

  listarDrogarias(search: string, funcVinculado: boolean, pagina: number) : Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH +  "?search=" + search + "&semFuncVinculado=" + funcVinculado + "&page=" + pagina);
  }
}

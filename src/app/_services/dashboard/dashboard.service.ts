import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  private readonly PATH: string = "dashboard";

  constructor(private http: HttpClient) {}

  getDados(): Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH);
  }
}

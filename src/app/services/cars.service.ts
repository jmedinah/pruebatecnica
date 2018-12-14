import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) { }

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
    // return this.http.get<T>(environment.apiURL + url);
  }
}

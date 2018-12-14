import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}
  private CarId = new BehaviorSubject("");
  currentCarId = this.CarId.asObservable();
  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(environment.apiURL + url);
  }

  changeCarId(id: string) {
    this.CarId.next(id);
  }
}

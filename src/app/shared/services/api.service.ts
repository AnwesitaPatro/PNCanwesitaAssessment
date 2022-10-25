import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(public http: HttpClient) {}

  processApiResponse<T>() {
    return (httpResponse$: Observable<any>) =>
      httpResponse$.pipe(
        map((response) => response as T),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
  }

  get<T>(endpoint: string): Observable<any> {
    return this.http.get(endpoint).pipe(this.processApiResponse());
  }

  getProfile() {
    return this.get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
  }
  validateLogin() {
    return this.get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d');
  }
}

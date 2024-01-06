import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProductResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:5500/api/v1';

  constructor(private http: HttpClient) {}

  products$ = this.http.get<IProductResponse>(`${this.url}/product`).pipe(
    // tap((data) => console.log('products:', JSON.stringify(data))),
    // tap((data) => console.log('products:', data.data.data)),
    map((products) => products.data.data),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was:`,
        error.error
      );
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}

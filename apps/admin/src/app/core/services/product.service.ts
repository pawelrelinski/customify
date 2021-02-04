import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly DEFAULT_URL: string = 'http://localhost:3333/api/product';

  constructor(private http: HttpClient) { }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.DEFAULT_URL);
  }

  public getById<T>(id: string | number): Observable<T> {
    const url = `${this.DEFAULT_URL}/${id}`;
    return this.http.get<T>(url);
  }

  public create<T>(product: T): Observable<T> {
    return this.http.post<T>(this.DEFAULT_URL, product);
  }

}

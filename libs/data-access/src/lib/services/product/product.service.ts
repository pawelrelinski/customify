import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly DEFAULT_PRODUCT_URL: string = 'http://localhost:3333/api/product';

  constructor(private http: HttpClient) { }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.DEFAULT_PRODUCT_URL);
  }

  public getById<T>(id: number | string): Observable<T> {
    const url = `${this.DEFAULT_PRODUCT_URL}/${id}`;
    return this.http.get<T>(url);
  }

  public add<T>(product: T): Observable<T> {
    return this.http.post<T>(this.DEFAULT_PRODUCT_URL, product);
  }

  public update<T>(id: number, product: T): Observable<Object> {
    return this.http.put(`${this.DEFAULT_PRODUCT_URL}/${id}`, product);
  }

  public delete<T>(id: number): Observable<T> {
    const url = `${this.DEFAULT_PRODUCT_URL}/${id}`;
    return this.http.delete<T>(url);
  }

}

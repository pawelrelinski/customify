import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentDisplayProductsListInCategoriesService {

  private _currentCategory = new BehaviorSubject<string>('all');

  public getCurrentCategory(): Observable<string> {
    return this._currentCategory.asObservable();
  }

  public setCurrentCategory(category: string): void {
    this._currentCategory.next(category);
  }

}

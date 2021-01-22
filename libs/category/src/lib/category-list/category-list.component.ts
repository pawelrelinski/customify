import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

interface IHeaderData {
  title: string;
}

export interface ICategory {
  name: string;
  subcategories: Array<string>;
}

@Component({
  selector: 'customify-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public pageIntroHeaderData: IHeaderData;
  public categories: Array<ICategory> = [];

  public categorySubject: Subject<ICategory> = new Subject<ICategory>();
  public currentCategory$ = this.categorySubject.asObservable();
  public currentCategory: ICategory;

  public categoryIsChoose = false;
  public btnCategoryNameIsActive = false;

  constructor() { }

  ngOnInit(): void {
    this.initHeaderData();
    this.initCategories();
    this.initCurrentCategorySubscribe();
  }

  public showCategoryElements(name: string): void {
    this.categoryIsChoose = true;
    this.categorySubject.next(this.getCategoryDataByName(name));
  }

  private initHeaderData(): void {
    this.pageIntroHeaderData = { title: 'Categories' };
  }

  private initCategories(): void {
    this.categories.push(
      { name: 'women', subcategories: [ 'shirts', 'dress', 'boots' ] },
      { name: 'men', subcategories: [ 't-shirts', 'jeans', 'boots' ] },
      { name: 'kids', subcategories: [ 'bodies', 'heat', 'boots' ] }
    );
  }

  private getCategoryDataByName(name: string): ICategory {
    return this.categories.find(category => category.name === name);
  }

  private initCurrentCategorySubscribe(): void {
    this.currentCategory$.subscribe((currentCategory: ICategory) => {
      this.currentCategory = currentCategory;
    });
  }

}

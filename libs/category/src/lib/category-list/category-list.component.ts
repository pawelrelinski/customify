import { Component, OnInit } from '@angular/core';

interface IHeaderData {
  title: string;
}

interface ICategory {
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
  public currentDisplayCategory: ICategory;
  public categoryIsChoose = false;
  public btnCategoryNameIsActive = false;

  constructor() { }

  ngOnInit(): void {
    this.initHeader();
    this.initCategories();
  }

  public showCategoryElements(name: string): void {
    this.categoryIsChoose = true;
    this.currentDisplayCategory = this.getCategoryDataByName(name);
  }

  private initHeader(): void {
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

}

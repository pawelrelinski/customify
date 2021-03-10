import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

enum categoryListBtnText {
  SHOW = 'Show',
  HIDDEN = 'Hidden'
}

@Component({
  selector: 'customify-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  public screenWidth: number;
  public categoriesListIsShow: boolean;
  public showCategoriesBtnIsShow: boolean;
  public showCategoriesBtnText: categoryListBtnText = categoryListBtnText.SHOW;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.setDisplayBlocks();
  }

  @HostListener('window:resize', ['$event'])
  public getScreenSize(event?: Event) {
    this.screenWidth = window.innerWidth;
  }

  public toggleCategories(): void {
    if (this.categoriesListIsShow) {
      this.categoriesListIsShow = false;
      this.showCategoriesBtnText = categoryListBtnText.SHOW;
    } else {
      this.categoriesListIsShow = true;
      this.showCategoriesBtnText = categoryListBtnText.HIDDEN;
    }
  }

  private setDisplayBlocks(): void {
    if (this.screenWidth > 1024) {
      this.categoriesListIsShow = true;
    } else {
      this.categoriesListIsShow = false;
      this.showCategoriesBtnText = categoryListBtnText.SHOW;
    }
  }


}

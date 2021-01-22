import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ICategory } from '../category-list/category-list.component';

@Component({
  selector: 'customify-category-list-element',
  templateUrl: './category-list-element.component.html',
  styleUrls: ['./category-list-element.component.scss']
})
export class CategoryListElementComponent implements OnInit, OnChanges {

  @Input() category: ICategory;
  @Input() currentCategory: string;
  @Output() changeCurrentCategory: EventEmitter<string> = new EventEmitter<string>();

  public isCurrent: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setIsCurrent();
  }

  ngOnChanges(): void {
    this.setIsCurrent();
  }

  public onClick(categoryName: string): void {
    this.changeCurrentCategory.emit(categoryName);
  }

  private setIsCurrent(): void {
    this.isCurrent = this.category.name === this.currentCategory;
  }

}

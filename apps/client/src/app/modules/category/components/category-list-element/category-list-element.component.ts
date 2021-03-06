import { Component, Input } from '@angular/core';


@Component({
  selector: 'customify-category-list-element',
  templateUrl: './category-list-element.component.html',
  styleUrls: ['./category-list-element.component.scss']
})
export class CategoryListElementComponent {

  @Input() categoryName: string;

}

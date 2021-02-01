import { Component, Input } from '@angular/core';
import { ClientProduct } from '@customify/api-interfaces';

@Component({
  selector: 'ui-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: ClientProduct;
  @Input() subcategory: string;

  constructor() { }

}

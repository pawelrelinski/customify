import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: any;

  constructor() { }

}

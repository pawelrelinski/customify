import { Component, Input, OnInit } from '@angular/core';
import { ClientProduct } from '@customify/api-interfaces';

@Component({
  selector: 'customify-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ClientProduct;
  @Input() subcategory: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

export interface IProduct {
  name: string;
  price: number;
  id: string | number;
  description: string;
  brand: string;
  imgUrl: string;
}

@Component({
  selector: 'customify-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;
  @Input() subcategory: string;

  constructor() { }

  ngOnInit(): void {
  }

  public getName(): IProduct['name'] {
    return this.product?.name;
  }

  public getPrice(): IProduct['price'] {
    return this.product?.price;
  }

  public getId(): IProduct['id'] {
    return this.product?.id;
  }

  public getDescription(): IProduct['description'] {
    return this.product?.description;
  }

  public getBrand(): IProduct['brand'] {
    return this.product?.brand;
  }

  public getImgUrl(): IProduct['imgUrl'] {
    return this.product?.imgUrl;
  }

}

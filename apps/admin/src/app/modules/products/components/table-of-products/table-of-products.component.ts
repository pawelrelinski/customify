import { Component, OnInit } from '@angular/core';
import { IProduct } from '@customify/api-interfaces';
import { ProductService } from '../../../../core/services/product.service';
import { IResponse } from '../../../../shared/models/IResponse';

@Component({
  selector: 'customify-table-of-products',
  templateUrl: './table-of-products.component.html',
  styleUrls: ['./table-of-products.component.scss']
})
export class TableOfProductsComponent implements OnInit {

  public products: Array<IProduct>;
  public isLoaded = false;
  public pageHeaderData = { title: 'Products' };

  public productKeys: Array<string>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  private fetchAllProducts(): void {
    this.productService.getAll<IResponse<Array<IProduct>>>()
      .subscribe((products: IResponse<Array<IProduct>>) => {
        this.checkProducts(products.data);
        this.products = products.data;
        this.productKeys = this.getAllProductsKeys();
        console.log(this.productKeys);
      });
  }

  private checkProducts(product: Array<IProduct>): void {
    this.isLoaded = !(!product || product.length === 0);
  }

  private getAllProductsKeys(): Array<string> {
    return  Object.keys(this.products[0]);
  }

}

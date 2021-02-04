import { Component, OnInit } from '@angular/core';
import { IProduct } from '@customify/api-interfaces';
import { ProductService } from '../../../../core/services/product.service';
import { IResponse } from '../../../../shared/models/IResponse';

@Component({
  selector: 'customify-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Array<IProduct>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  private fetchAllProducts(): void {
    this.productService.getAll<IResponse>().subscribe((products: IResponse) => {
      this.products = products.data;
    });
  }

}

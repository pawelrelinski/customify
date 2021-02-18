import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { IProduct } from '@customify/api-interfaces';
import { ProductService } from '@customify/data-access';
import { IResponse } from '../../../../shared/models/IResponse';

@Component({
  selector: 'customify-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  public product: IProduct;

  private productId: number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.setProductIdFromParams();
    this.setProduct();
  }

  public goToPreviousPage(): void {
    this.location.back();
  }

  public updateProduct(): void {
    // this.productService.update()
  }

  private setProductIdFromParams(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });
  }

  private setProduct(): void {
    this.productService.getById<IResponse<IProduct>>(this.productId).subscribe((response: IResponse<IProduct>) => {
      if (response.success) {
        this.product = response.data;
      }
    });
  }

}

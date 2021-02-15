import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '@customify/api-interfaces';
import { ProductService } from '@customify/data-access';
import { IResponse } from '../../../../shared/models/IResponse';

@Component({
  selector: 'customify-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: IProduct;

  private productId: number;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.setProductIdFromParams();
    this.setProduct();
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

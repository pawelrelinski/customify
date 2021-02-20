import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { IProduct } from '@customify/api-interfaces';
import { ProductService } from '@customify/data-access';
import { IResponse } from '../../../../shared/models/IResponse';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductFormService } from '../../../../core/services/product-form.service';

type ResponseProduct = IResponse<IProduct>;

@Component({
  selector: 'customify-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  public product: IProduct;
  public updateProductForm: FormGroup;

  private productId: number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private productFormService: ProductFormService) { }

  ngOnInit(): void {
    this.getProductIdFromParams();
    this.getProduct();
    this.initUpdateProductForm();
  }

  public goToPreviousPage(): void {
    this.location.back();
  }

  public updateProduct(): void {
    this.productService.update<ResponseProduct>(this.productId, this.updateProductForm.value)
      .subscribe((response: ResponseProduct) => {
        if (response.success) {
          this.getProduct();
        }
      });
  }

  public removeProduct(): void {
    this.productService.delete<ResponseProduct>(this.productId)
      .subscribe((response: ResponseProduct) => {
        if (response.success) {
          this.goToPreviousPage();
        }
      });
  }

  private getProductIdFromParams(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });
  }

  private getProduct(): void {
    this.productService.getById<ResponseProduct>(this.productId).subscribe((response: ResponseProduct) => {
      if (response.success) {
        this.product = response.data;
        this.setDefaultUpdateProductFormValues();
      }
    });
  }

  private initUpdateProductForm(): void {
    this.updateProductForm = this.formBuilder.group(this.productFormService.getControlsConfig());
  }

  private setDefaultUpdateProductFormValues(): void {
    this.updateProductForm.get('name').setValue(this.product?.name);
    this.updateProductForm.get('price').setValue(this.product?.price);
    this.updateProductForm.get('description').setValue(this.product?.description);
    this.updateProductForm.get('brand').setValue(this.product?.brand);
    this.updateProductForm.get('imgUrl').setValue(this.product?.imgUrl);
    this.updateProductForm.get('imgAlt').setValue(this.product?.imgAlt);
  }

}

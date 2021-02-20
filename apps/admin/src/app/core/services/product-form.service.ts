import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

interface IProductFormConfig {
  name: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  price: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  description: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  brand: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  imgUrl: (string | any[])[], imgAlt: (string | ValidatorFn[])[]
}


@Injectable({
  providedIn: 'root'
})
export class ProductFormService {

  constructor() {
  }

  public getControlsConfig(): IProductFormConfig {
    return {
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      price: [0.00, [
        Validators.required,
        Validators.min(0.00),
        Validators.max(99_999.99)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      brand: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      imgUrl: ['', []],
      imgAlt: ['', [
        Validators.minLength(3),
        Validators.maxLength(255)
      ]]
    };
  }

}

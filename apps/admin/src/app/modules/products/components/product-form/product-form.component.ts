import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductFormService } from '../../../../core/services/product-form.service';

interface IControlSimpleData {
  name: string;
  type: string;
}

type ControlTypes = 'text' | 'number';

@Component({
  selector: 'customify-new-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() onCreateProduct: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() onHideForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  public productForm: FormGroup;
  public productFormControls: Array<IControlSimpleData>;

  constructor(private formBuilder: FormBuilder,
              private productFormService: ProductFormService) { }

  ngOnInit(): void {
    this.initProductForm();
    this.getProductFormControls();
  }

  public submitForm(): void {
    this.onCreateProduct.emit(this.productForm);
  }

  public hideForm(): void {
    this.onHideForm.emit(false);
  }

  get name(): AbstractControl {
    return this.productForm.get('name');
  }

  private initProductForm(): void {
    this.productForm = this.formBuilder.group(this.productFormService.getControlsConfig());
  }

  private getProductFormControls(): void {
    const controlsNames: Array<string> = Object.keys(this.productForm.controls);
    const controls: Array<IControlSimpleData> = [];

    for (const controlName of controlsNames)
      controls.push(this.createControl(controlName));

    this.productFormControls = controls;
  }

  private checkControlType(control: string): ControlTypes {
    if (control === '') {
      return 'text';
    } else {
      return 'number';
    }
  }

  private createControl(controlName: string): IControlSimpleData {
    const controlValue = this.productForm.get(controlName).value;

    return {
      name: controlName,
      type: this.checkControlType(controlValue)
    };
  }

}

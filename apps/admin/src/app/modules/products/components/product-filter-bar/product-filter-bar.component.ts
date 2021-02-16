import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

enum ToggleButtonTexts {
  SHOW_ALL_KEYS = 'Show all keys',
  SHOW_LESS_KEYS = 'Show less keys'
}

@Component({
  selector: 'customify-product-filter-bar',
  templateUrl: './product-filter-bar.component.html',
  styleUrls: ['./product-filter-bar.component.scss']
})
export class ProductFilterBarComponent implements OnInit {

  @Output()
  onFiltersChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  @Input() productKeys: Array<string>;

  public productsKeysToDisplay: Array<string>;
  public buttonText: ToggleButtonTexts = ToggleButtonTexts.SHOW_ALL_KEYS;
  public checkboxFormGroup: FormGroup;

  private showFullKeysList = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setShortKeysListToDisplay();
    this.initCheckboxFormGroup();
  }

  public toggleDisplayKeys(): void {
    if (!this.showFullKeysList) {
      this.showFullKeysList = true;
      this.productsKeysToDisplay = this.productKeys;
      this.buttonText = ToggleButtonTexts.SHOW_LESS_KEYS;
    } else {
      this.showFullKeysList = false;
      this.setShortKeysListToDisplay();
      this.buttonText = ToggleButtonTexts.SHOW_ALL_KEYS;
    }
  }

  public onChange(event): void {
    const formArray: FormArray = this.checkboxFormGroup.get('myChoices') as FormArray;

    if(event.target.checked){
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }

    this.onFiltersChange.emit(this.checkboxFormGroup.value.myChoices);
  }

  private setShortKeysListToDisplay(): void {
    const MAX_LENGTH = 2;
    if (this.productKeys.length > MAX_LENGTH) {
      this.productsKeysToDisplay = this.productKeys.slice(0, MAX_LENGTH);
    }
  }

  private initCheckboxFormGroup(): void {
    this.checkboxFormGroup = this.formBuilder.group({
      controls: [''],
      myChoices: new FormArray([])
    });
  }

}

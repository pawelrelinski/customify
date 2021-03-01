import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'customify-account-information-wrapper',
  templateUrl: './account-information-wrapper.component.html',
  styleUrls: ['./account-information-wrapper.component.scss']
})
export class AccountInformationWrapperComponent implements OnInit {

  @Input() name: string;
  @Input() value: string;
  @Input() editButtonIsActive: boolean;

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.editButtonIsActive = !this.editButtonIsActive;
  }

  public emitClickChange() {
    this.onClick.emit(this.name);
  }

}

import { Component, Input, OnInit } from '@angular/core';

enum buttonStatus {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning'
}

enum buttonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  GIANT = 'giant'
}

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() status: buttonStatus;
  @Input() size: buttonSize;
  @Input() disabled: boolean;

  public classList: string;

  constructor() { }

  ngOnInit(): void {
    this.setClassList();
  }

  private setClassList(): void {
    if (!this.status) this.status = buttonStatus.DEFAULT;
    if (!this.size) this.size = buttonSize.MEDIUM;

    this.classList = `btn ${this.status} ${this.size}`;
  }

}

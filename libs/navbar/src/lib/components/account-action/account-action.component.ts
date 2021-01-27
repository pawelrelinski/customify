import { Component, Input } from '@angular/core';
import { ILinkElement } from '../../models/ILinkElement';

@Component({
  selector: 'account-action',
  templateUrl: './account-action.component.html',
  styleUrls: ['./account-action.component.scss']
})
export class AccountActionComponent {

  @Input() userNavElement: ILinkElement;

}

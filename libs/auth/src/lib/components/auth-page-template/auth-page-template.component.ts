import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-page-template',
  templateUrl: './auth-page-template.component.html',
  styleUrls: ['./auth-page-template.component.scss']
})
export class AuthPageTemplateComponent {

  @Input() title: string;

}

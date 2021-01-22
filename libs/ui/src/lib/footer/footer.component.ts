import { Component, Input } from '@angular/core';

@Component({
  selector: 'customify-footer',
  template: `
    <footer class="footer" [class.footer--short]='menuIsOpen'>
      Paweł Reliński &copy; 2021
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() menuIsOpen: boolean;
}

import { text, number, boolean } from '@storybook/addon-knobs';
import { LogoComponent } from './logo.component';

export default {
  title: 'LogoComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: LogoComponent,
  props: {
    logoData: { routerLink: '/category', name: 'category', classes: 'bx bx-layer' }
  }
})

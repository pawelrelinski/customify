import { boolean } from '@storybook/addon-knobs';
import { FooterComponent } from './footer.component';

export default {
  title: 'FooterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: FooterComponent,
  props: {
    menuIsOpen: boolean('menuIsOpen', false),
  }
})

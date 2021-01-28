import { text, number, boolean } from '@storybook/addon-knobs';
import { LinkElementComponent } from './link-element.component';

export default {
  title: 'LinkElementComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: LinkElementComponent,
  props: {
    navElement: text('navElement', ),
  }
})
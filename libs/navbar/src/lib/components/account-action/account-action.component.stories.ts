import { text, number, boolean } from '@storybook/addon-knobs';
import { AccountActionComponent } from './account-action.component';

export default {
  title: 'AccountActionComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: AccountActionComponent,
  props: {
    userNavElement: text('userNavElement', ),
  }
})
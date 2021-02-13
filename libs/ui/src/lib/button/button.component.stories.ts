import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ButtonComponent,
  props: {
    status: 'warning',
    size: 'medium',
    disabled: false
  }
})

import { LoaderComponent } from './loader.component';

export default {
  title: 'LoaderComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: LoaderComponent,
  props: {}
});

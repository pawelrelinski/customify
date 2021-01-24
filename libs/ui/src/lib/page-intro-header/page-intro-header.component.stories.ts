import { text, number, boolean } from '@storybook/addon-knobs';
import { PageIntroHeaderComponent, IPageIntroHeaderData } from './page-intro-header.component';

export default {
  title: 'PageIntroHeaderComponent'
}

const headerData: IPageIntroHeaderData = {
  title: 'Storybook Title'
};

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: PageIntroHeaderComponent,
  props: {
    headerData: headerData,
  }
})

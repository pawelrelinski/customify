import { text, number, boolean } from '@storybook/addon-knobs';
import { BannerComponent, IBanner } from './banner.component';

export default {
  title: 'BannerComponent'
}

const bannerData: IBanner = {
  title: 'My banner',
  description: 'Whats up guys?',
  backgroundColor: 'rgb(225,105,241)',
  textColor: 'rgb(250,250,250)'
};

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: BannerComponent,
  props: {
    bannerData: bannerData,
  }
})

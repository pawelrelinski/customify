import { text, number, boolean } from '@storybook/addon-knobs';
import { BannerComponent, IBanner } from './banner.component';

export default {
  title: 'BannerComponent'
}

const bannerData: IBanner = {
  title: 'My banner',
  description: 'Whats up guys?',
  backgroundColorInRGB: 'rgb(225,105,241)',
  textColorInRgb: 'rgb(250,250,250)'
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

import { BannerComponent, IBanner } from '@customify/ui';

describe('BannerComponent', () => {

  let component: BannerComponent;
  const bannerData: IBanner = {
    title: 'My banner',
    description: 'Description of my banner',
    height: 500
  };

  beforeEach(() => {
    component = new BannerComponent();
  });

  it('should be set height to 500px', () => {
    component.bannerData = bannerData;
    expect(component.getHeight()).toEqual(`${bannerData.height}px`);
  });

});

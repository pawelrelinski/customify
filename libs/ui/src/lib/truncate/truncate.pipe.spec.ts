import { TruncatePipe } from './truncate.pipe';

const longText = 'https://image.ceneostatic.pl/data/products/85619136/i-apple-ipad-2019-10-2-32gb-wi-fi-gwiezdna-szarosc-mw742fd-a.jpg';
const shortText = 'Short text';

describe('TruncatePipe', () => {

  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('transform too long text to short text', () => {
    expect(pipe.transform(longText)).toBe('https://image.ceneos...');
  });

  it('not transform', () => {
    expect(pipe.transform(shortText)).toBe(shortText);
  });

});

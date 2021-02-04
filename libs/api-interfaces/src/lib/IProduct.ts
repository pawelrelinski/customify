export interface IProduct {
  name: string;
  price: number;
  readonly id: string | number;
  description: string;
  brand: string;
  imgUrl: string;
  imgAlt: string;
}

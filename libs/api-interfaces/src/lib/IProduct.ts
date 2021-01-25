export interface IProduct {
  name: string;
  price: number;
  readonly id: string | number;
  description: string;
  brand: string;
  imgUrl: string;
  imgAlt: string;

  getName(): IProduct['name'];
  getPrice(): IProduct['price'];
  getId(): IProduct['id'];
  getDescription(): IProduct['description'];
  getBrand(): IProduct['brand'];
  getImgUrl(): IProduct['imgUrl'];
  getImgAlt(): IProduct['imgAlt'];

  setName?(name: IProduct['name']): void;
  setPrice?(price: IProduct['price']): void;
  setDescription?(description: IProduct['description']): void;
  setBrand?(brand: IProduct['brand']): void;
  setImgUrl?(imgUrl: IProduct['imgUrl']): void;
  setImgAlt?(imgAlt: IProduct['imgAlt']): void;
}

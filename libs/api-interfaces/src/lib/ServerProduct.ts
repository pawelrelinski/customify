import { IProduct } from './IProduct';

// TODO: move client and server implementation IProduct to client and api catalogs

export class ServerProduct implements IProduct {

  brand: string;
  description: string;
  readonly id: string | number;
  imgAlt: string;
  imgUrl: string;
  name: string;
  price: number;

  getBrand(): IProduct["brand"] {
    return this.brand;
  }

  getDescription(): IProduct["description"] {
    return this.description;
  }

  getId(): IProduct["id"] {
    return this.id;
  }

  getImgAlt(): IProduct["imgAlt"] {
    return this.imgAlt;
  }

  getImgUrl(): IProduct["imgUrl"] {
    return this.imgUrl;
  }

  getName(): IProduct["name"] {
    return this.name;
  }

  getPrice(): IProduct["price"] {
    return this.price;
  }

  setBrand(brand: IProduct["brand"]): void {
    this.brand = brand;
  }

  setDescription(description: IProduct["description"]): void {
    this.description = description;
  }

  setImgAlt(imgAlt: IProduct["imgAlt"]): void {
    this.imgAlt = imgAlt;
  }

  setImgUrl(imgUrl: IProduct["imgUrl"]): void {
    this.imgUrl = imgUrl;
  }

  setName(name: IProduct["name"]): void {
    this.name = name;
  }

  setPrice(price: IProduct["price"]): void {
    this.price = price;
  }

}

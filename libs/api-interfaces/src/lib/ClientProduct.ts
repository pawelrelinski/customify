import { IProduct } from './IProduct';

export class ClientProduct implements IProduct {

  constructor(public name: string,
              public price: number,
              readonly id: string | number,
              public description: string,
              public brand: string,
              public imgUrl: string,
              public imgAlt: string) {
  }

  public getBrand(): IProduct['brand'] {
    return this.brand;
  }

  public getDescription(): IProduct['description'] {
    return this.description;
  }

  public getId(): IProduct['id'] {
    return this.id;
  }

  public getImgAlt(): IProduct['imgAlt'] {
    return this.imgAlt;
  }

  public getImgUrl(): IProduct['imgUrl'] {
    return this.imgUrl;
  }

  public getName(): IProduct['name'] {
    return this.name;
  }

  public getPrice(): IProduct['price'] {
    return this.price;
  }

  public setBrand(brand: IProduct['brand']): void {
  }

  public setDescription(description: IProduct['description']): void {
  }

  public setImgAlt(imgAlt: IProduct['imgAlt']): void {
  }

  public setImgUrl(imgUrl: IProduct['imgUrl']): void {
  }

  public setName(name: IProduct['name']): void {
  }

  public setPrice(price: IProduct['price']): void {
  }

}


import { IProduct, ProductComponent } from './product.component';

export default {
  title: 'ProductComponent'
}

const product: IProduct = {
  name: 'Blue jeans',
  price: 12.99,
  id: 2,
  description: 'This is a very strong jeans',
  brand: 'Calvin Klen',
  imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/59/bc/59bcf288e8bdefe1fc1fdea2ae820e4ce4447b65.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]'
};

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ProductComponent,
  props: {
    product: product
  }
})


import { ProductComponent } from './product.component';
import { ClientProduct } from '@customify/api-interfaces';

export default {
  title: 'ProductComponent'
}

const product = new ClientProduct(
  'Blue jeans',
  12.99,
  2,
  'This is a very strong jeans',
  'Calvin Klen',
  'https://lp2.hm.com/hmgoepprod?set=source[/59/bc/59bcf288e8bdefe1fc1fdea2ae820e4ce4447b65.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]',
  'ClientProduct.ts photo');

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ProductComponent,
  props: {
    product: product
  }
})

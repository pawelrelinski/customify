import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientProduct } from '@customify/api-interfaces';

@Component({
  selector: 'customify-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public products: Array<ClientProduct> = [];
  public currentSubcategoryTitle: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscribeParams();
    this.setProducts();
  }

  private subscribeParams(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentSubcategoryTitle = params['subcategory'];
    });
  }

  private setProducts(): void {
    this.products.push(
      new ClientProduct(
        'Blue jeans',
        12.99,
        2,
        'This is a very strong jeans',
        'Calvin Klen',
        'https://lp2.hm.com/hmgoepprod?set=source[/59/bc/59bcf288e8bdefe1fc1fdea2ae820e4ce4447b65.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]',
        'ClientProduct.ts photo'),
      new ClientProduct(
        'Blue jeans',
        12.99,
        2,
        'This is a very strong jeans',
        'Calvin Klen',
        'https://lp2.hm.com/hmgoepprod?set=source[/59/bc/59bcf288e8bdefe1fc1fdea2ae820e4ce4447b65.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]',
        'ClientProduct.ts photo'),
      new ClientProduct(
        'Blue jeans',
        12.99,
        2,
        'This is a very strong jeans',
        'Calvin Klen',
        'https://lp2.hm.com/hmgoepprod?set=source[/59/bc/59bcf288e8bdefe1fc1fdea2ae820e4ce4447b65.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]',
        'ClientProduct.ts photo'),
      new ClientProduct(
        'Blue jeans',
        12.99,
        2,
        'This is a very strong jeans',
        'Calvin Klen',
        'https://lp2.hm.com/hmgoepprod?set=source[/59/bc/59bcf288e8bdefe1fc1fdea2ae820e4ce4447b65.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]',
        'ClientProduct.ts photo')
    );
  }

}

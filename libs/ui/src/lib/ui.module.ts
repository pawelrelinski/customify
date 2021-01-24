import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PageIntroHeaderComponent } from './page-intro-header/page-intro-header.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageIntroHeaderComponent,
    BannerComponent,
    ProductComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageIntroHeaderComponent,
    BannerComponent,
    ProductComponent
  ]
})
export class UiModule {}

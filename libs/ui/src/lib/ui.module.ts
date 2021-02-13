import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PageIntroHeaderComponent } from './page-intro-header/page-intro-header.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { LoaderComponent } from './loader/loader.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageIntroHeaderComponent,
    BannerComponent,
    ProductComponent,
    LoaderComponent,
    TableComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageIntroHeaderComponent,
    BannerComponent,
    ProductComponent,
    LoaderComponent,
    MatTableModule
  ]
})
export class UiModule {}

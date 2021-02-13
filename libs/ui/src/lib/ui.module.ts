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
import { TruncatePipe } from './truncate/truncate.pipe';
import { ButtonComponent } from './button/button.component';

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
    TableComponent,
    TruncatePipe,
    ButtonComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageIntroHeaderComponent,
    BannerComponent,
    ProductComponent,
    LoaderComponent,
    MatTableModule,
    TableComponent,
    ButtonComponent
  ]
})
export class UiModule {}

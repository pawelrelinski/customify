import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ITableData<T> {
  columns: Array<string>;
  body: Array<T>
}

enum Sort {
  DESC = 'desc',
  ASC = 'asc'
}

@Component({
  selector: 'customify-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {

  @Input() columnNames: Array<string>;
  @Input() products: Array<unknown>;

  @Output() onClickProduct: EventEmitter<number> = new EventEmitter<number>();

  private sortType: Sort = Sort.ASC;

  constructor() { }

  public emitProductId(id: number): void {
    this.onClickProduct.emit(id);
  }

  public sortBy(columnName: string): void {
    if (this.sortType === Sort.ASC) {
      this.ascSort(columnName);
    } else {
      this.descSort(columnName);
    }
  }

  private ascSort(column): void {
    this.sortType = Sort.DESC;
    this.products.sort((a, b) => {
      if ( a[column] < b[column] ) return -1;
      if ( a[column] > b[column] ) return 1;

      return 0;
    });
  }

  private descSort(column): void {
    this.sortType = Sort.ASC;
    this.products.sort((a, b) => {
      if ( a[column] > b[column] ) return -1;
      if ( a[column] < b[column] ) return 1;

      return 0;
    });
  }

}

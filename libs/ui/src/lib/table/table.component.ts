import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITableData<T> {
  columns: Array<string>;
  body: Array<T>
}

enum Sort {
  DESC = 'desc',
  ASC = 'asc'
}

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData: ITableData<unknown>;

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onGetFullInfo: EventEmitter<number> = new EventEmitter<number>();

  private columnNames: Array<string>;
  private elements: Array<unknown>;
  private sortType: Sort = Sort.ASC;

  constructor() { }

  ngOnInit(): void {
    this.setTableProperties();
  }

  public sortBy(columnName: string): void {
    if (this.sortType === Sort.ASC) {
      this.ascSort(columnName);
    } else {
      this.descSort(columnName);
    }
  }

  public getColumnNames(): Array<string> {
    return this.columnNames;
  }

  public getElements(): Array<unknown> {
    return this.elements;
  }

  public deleteProduct(id: number): void {
    this.onDelete.emit(id);
  }

  public convertToNumber(val: unknown): number {
    return Number(val);
  }

  public getFullInfo(id: number): void {
    this.onGetFullInfo.emit(this.convertToNumber(id));
  }

  private setColumnNames(): void {
    if (!this.tableData.columns) {
      this.columnNames = Object.keys(this.tableData.body[0]);
    }

    this.columnNames = this.tableData.columns;
  }

  private setElements(): void {
    if (!this.tableData.body) {
      throw new Error('Table data body is empty!');
    }

    this.elements = this.tableData.body;
  }

  private setTableProperties(): void {
    this.setColumnNames();
    this.setElements();
  }

  private ascSort(column): void {
    this.sortType = Sort.DESC;
    this.elements.sort((a, b) => {
      if ( a[column] < b[column] ) return -1;
      if ( a[column] > b[column] ) return 1;

      return 0;
    });
  }

  private descSort(column): void {
    this.sortType = Sort.ASC;
    this.elements.sort((a, b) => {
      if ( a[column] > b[column] ) return -1;
      if ( a[column] < b[column] ) return 1;

      return 0;
    });
  }

}

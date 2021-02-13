import { Component, Input, OnInit } from '@angular/core';

export interface ITableData<T> {
  columns: Array<string>;
  body: Array<T>
}

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData: ITableData<unknown>;

  private columnNames: Array<string>;
  private elements: Array<unknown>;

  constructor() { }

  ngOnInit(): void {
    this.setColumnNames();
    this.setElements();
  }

  public getColumnNames(): Array<string> {
    return this.columnNames;
  }

  public getElements(): Array<unknown> {
    return this.elements;
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

}



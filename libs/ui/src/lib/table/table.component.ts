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

  constructor() { }

  ngOnInit(): void {
    this.setColumnNames();
  }

  public getColumnNames(): Array<string> {
    return this.columnNames;
  }

  public getElements(): Array<unknown> {
    return this.tableData.body;
  }

  private setColumnNames(): void {
    if (!this.tableData.columns) {
      this.columnNames = Object.keys(this.tableData.body[0]);
    }

    this.columnNames = this.tableData.columns;
  }

}



import { ITableData, TableComponent } from './table.component';

// @ts-ignore
const tableData: ITableData<any> = {
  columns: ['id', 'name', 'price', 'description'],
  body: [
    { id: 1, name: 'Prod 1 Prod 1', price: 12.99, description: 'This is description' },
    { id: 2, name: 'Prod 2', price: 2.99, description: 'This is description' },
    { id: 3, name: 'Prod 3', price: 24.99, description: 'This is description' },
    { id: 4, name: 'Prod 4', price: 56.99, description: 'This is description' },
  ]
};

export default {
  title: 'TableComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TableComponent,
  props: { tableData }
})

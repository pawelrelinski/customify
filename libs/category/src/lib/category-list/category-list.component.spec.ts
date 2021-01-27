import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryListComponent } from '@customify/category';

describe('CategoryListComponent', () => {

  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(() => {
    component = new CategoryListComponent();
  });

  it('should be set header title to Categories', () => {
    component.ngOnInit();
    expect(component.pageIntroHeaderData.title).toEqual('Categories');
  });

});

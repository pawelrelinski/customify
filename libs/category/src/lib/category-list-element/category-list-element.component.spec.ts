import { CategoryListElementComponent } from './category-list-element.component';

describe('CategoryListElementComponent', () => {
  let component: CategoryListElementComponent;

  beforeEach(() => {
    component = new CategoryListElementComponent();
  });

  it('should take categories', () => {
    component.category = {
      name: 'men',
      subcategories: ['dress', 'boots']
    };

    expect(component.category.name).toEqual('men');
  });

  it('should take current category name', () => {
    const currentCategoryName = 'women';
    component.currentCategory = currentCategoryName;
    expect(component.currentCategory).toEqual(currentCategoryName);
  });

  it('should set isCurrent flag to true', () => {
    const currentCategoryName = 'women';
    component.currentCategory = currentCategoryName;
    component.category = {
      name: currentCategoryName,
      subcategories: ['dress', 'boots']
    };
    component.ngOnInit();
    expect(component.isCurrent).toEqual(true);
  });

  it('should set isCurrent flag to false', () => {
    const currentCategoryName = 'women';
    component.currentCategory = 'men';
    component.category = {
      name: currentCategoryName,
      subcategories: ['dress', 'boots']
    };
    component.ngOnInit();
    expect(component.isCurrent).toEqual(false);
  });

});

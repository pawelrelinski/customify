import { TestBed } from '@angular/core/testing';

import { CurrentDisplayProductsListInCategoriesService } from './current-display-products-list-in-categories.service';

describe('CurrentDisplayProductsListInCategoriesService', () => {
  let service: CurrentDisplayProductsListInCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDisplayProductsListInCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

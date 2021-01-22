import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListElementComponent } from './category-list-element.component';

describe('CategoryListElementComponent', () => {
  let component: CategoryListElementComponent;
  let fixture: ComponentFixture<CategoryListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

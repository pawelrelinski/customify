import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPageComponent } from './product-details-page.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

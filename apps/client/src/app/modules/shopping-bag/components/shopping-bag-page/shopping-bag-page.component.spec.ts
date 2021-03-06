import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBagPageComponent } from './shopping-bag-page.component';

describe('ShoppingBagPageComponent', () => {
  let component: ShoppingBagPageComponent;
  let fixture: ComponentFixture<ShoppingBagPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBagPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

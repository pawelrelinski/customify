import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryPageComponent } from './cateogry-page.component';

describe('CateogryPageComponent', () => {
  let component: CateogryPageComponent;
  let fixture: ComponentFixture<CateogryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateogryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

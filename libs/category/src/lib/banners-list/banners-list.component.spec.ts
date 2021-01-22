import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersListComponent } from './banners-list.component';

describe('BannersListComponent', () => {
  let component: BannersListComponent;
  let fixture: ComponentFixture<BannersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

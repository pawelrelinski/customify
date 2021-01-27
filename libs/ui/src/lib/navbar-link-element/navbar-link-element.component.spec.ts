import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLinkElementComponent } from './navbar-link-element.component';

describe('NavbarLinkElementComponent', () => {
  let component: NavbarLinkElementComponent;
  let fixture: ComponentFixture<NavbarLinkElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLinkElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLinkElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

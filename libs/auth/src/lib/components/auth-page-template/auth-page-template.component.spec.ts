import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageTemplateComponent } from './auth-page-template.component';

describe('AuthPageTemplateComponent', () => {
  let component: AuthPageTemplateComponent;
  let fixture: ComponentFixture<AuthPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

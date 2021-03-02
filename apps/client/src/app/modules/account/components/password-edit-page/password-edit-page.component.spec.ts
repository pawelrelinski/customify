import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEditPageComponent } from './password-edit-page.component';

describe('PasswordEditComponent', () => {
  let component: PasswordEditPageComponent;
  let fixture: ComponentFixture<PasswordEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeEditPageComponent } from './account-type-edit-page.component';

describe('AccountTypeEditComponent', () => {
  let component: AccountTypeEditPageComponent;
  let fixture: ComponentFixture<AccountTypeEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTypeEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

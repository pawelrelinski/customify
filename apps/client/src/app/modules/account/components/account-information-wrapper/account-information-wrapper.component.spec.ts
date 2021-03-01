import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInformationWrapperComponent } from './account-information-wrapper.component';

describe('AccountInformationWrapperComponent', () => {
  let component: AccountInformationWrapperComponent;
  let fixture: ComponentFixture<AccountInformationWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInformationWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInformationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

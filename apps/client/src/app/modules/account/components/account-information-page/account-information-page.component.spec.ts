import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInformationPageComponent } from './account-information-page.component';

describe('AccountInformationComponent', () => {
  let component: AccountInformationPageComponent;
  let fixture: ComponentFixture<AccountInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActionComponent } from './account-action.component';

describe('AccountActionComponent', () => {
  let component: AccountActionComponent;
  let fixture: ComponentFixture<AccountActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditPageComponent } from './phone-number-edit-page.component';

describe('PhoneNumberEditComponent', () => {
  let component: PhoneNumberEditPageComponent;
  let fixture: ComponentFixture<PhoneNumberEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumberEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

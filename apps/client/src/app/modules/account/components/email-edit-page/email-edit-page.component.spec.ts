import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEditPageComponent } from './email-edit-page.component';

describe('EmailEditComponent', () => {
  let component: EmailEditPageComponent;
  let fixture: ComponentFixture<EmailEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameEditComponent } from './username-edit.component';

describe('UsernameEditComponent', () => {
  let component: UsernameEditComponent;
  let fixture: ComponentFixture<UsernameEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

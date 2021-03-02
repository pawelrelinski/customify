import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndSettingsPageComponent } from './security-and-settings-page.component';

describe('SecurityAndSettingsPageComponent', () => {
  let component: SecurityAndSettingsPageComponent;
  let fixture: ComponentFixture<SecurityAndSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityAndSettingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAndSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

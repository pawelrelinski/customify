import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataWrapperComponent } from './edit-data-wrapper.component';

describe('EditDataWrapperComponent', () => {
  let component: EditDataWrapperComponent;
  let fixture: ComponentFixture<EditDataWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

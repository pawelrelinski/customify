import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsAndRefundsPageComponent } from './returns-and-refunds-page.component';

describe('ReturnsAndRefundsPageComponent', () => {
  let component: ReturnsAndRefundsPageComponent;
  let fixture: ComponentFixture<ReturnsAndRefundsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnsAndRefundsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsAndRefundsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

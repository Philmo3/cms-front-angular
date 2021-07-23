import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithSteperComponent } from './form-with-steper.component';

describe('FormWithSteperComponent', () => {
  let component: FormWithSteperComponent;
  let fixture: ComponentFixture<FormWithSteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithSteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

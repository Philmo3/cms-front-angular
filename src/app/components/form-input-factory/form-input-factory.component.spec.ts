import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputFactoryComponent } from './form-input-factory.component';

describe('FormInputFactoryComponent', () => {
  let component: FormInputFactoryComponent;
  let fixture: ComponentFixture<FormInputFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

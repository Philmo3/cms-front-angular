import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSectionModule } from '../form-section/form-section.module';

import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormWithSteperComponent } from './form-with-steper.component';


@NgModule({
  declarations: [FormWithSteperComponent],
  imports: [
    CommonModule,
    NzStepsModule,
    NzButtonModule,
    FormSectionModule
  ],
  exports: [
    FormWithSteperComponent
  ]
})
export class FormWithSteperModule { }

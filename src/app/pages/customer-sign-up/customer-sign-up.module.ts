import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignUpComponent } from './customer-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormWithSteperModule } from 'src/app/components/form-with-steper/form-with-steper.module';
const routes: Routes = [{
  path: '',
  component: CustomerSignUpComponent
}]

@NgModule({
  declarations: [CustomerSignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormWithSteperModule
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerSignUpModule { }

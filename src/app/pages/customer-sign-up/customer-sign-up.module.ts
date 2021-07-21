import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignUpComponent } from './customer-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerSignUpModule { }

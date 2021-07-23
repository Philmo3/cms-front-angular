import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubTitleComponent } from '../components/sub-title/sub-title.component';




@NgModule({
  declarations: [SubTitleComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    CommonModule,
    SubTitleComponent
  ]
})
export class SharedModule { }

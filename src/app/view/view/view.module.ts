import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ViewComponent],
  exports: [ViewComponent]
})
export class ViewModule { }

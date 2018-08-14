import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SalesComponent],
  entryComponents: [SalesComponent]
})
export class SalesModule { }

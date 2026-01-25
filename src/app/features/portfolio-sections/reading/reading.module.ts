import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { ReadingComponent } from './reading.component';

const routes = [
  {
    path: '',
    component: ReadingComponent
  }
];

@NgModule({
  declarations: [
    ReadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ReadingModule { }

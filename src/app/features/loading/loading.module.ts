import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './loading.component';

const routes = [
  {
    path: '',
    component: LoadingComponent
  }
];

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoadingModule { }

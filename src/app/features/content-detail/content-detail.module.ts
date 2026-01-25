import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ContentDetailComponent } from './content-detail.component';

const routes = [
  {
    path: '',
    component: ContentDetailComponent
  }
];

@NgModule({
  declarations: [
    ContentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContentDetailModule { }

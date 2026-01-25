import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { RecommendationsComponent } from './recommendations.component';

const routes = [
  {
    path: '',
    component: RecommendationsComponent
  }
];

@NgModule({
  declarations: [
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RecommendationsModule { }

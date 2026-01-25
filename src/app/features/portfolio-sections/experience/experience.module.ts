import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { ExperienceComponent } from './experience.component';

const routes = [
  {
    path: '',
    component: ExperienceComponent
  }
];

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ExperienceModule { }

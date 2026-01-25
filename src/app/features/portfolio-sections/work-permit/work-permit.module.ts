import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { WorkPermitComponent } from './work-permit.component';

const routes = [
  {
    path: '',
    component: WorkPermitComponent
  }
];

@NgModule({
  declarations: [
    WorkPermitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkPermitModule { }

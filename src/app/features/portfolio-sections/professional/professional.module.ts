import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { ProfessionalComponent } from './professional.component';

const routes = [
  {
    path: '',
    component: ProfessionalComponent
  }
];

@NgModule({
  declarations: [
    ProfessionalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfessionalModule { }


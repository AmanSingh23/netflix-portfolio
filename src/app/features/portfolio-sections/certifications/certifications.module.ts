import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { CertificationsComponent } from './certifications.component';

const routes = [
  {
    path: '',
    component: CertificationsComponent
  }
];

@NgModule({
  declarations: [
    CertificationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CertificationsModule { }

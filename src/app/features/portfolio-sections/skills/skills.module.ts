import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { SkillsComponent } from './skills.component';

const routes = [
  {
    path: '',
    component: SkillsComponent
  }
];

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }

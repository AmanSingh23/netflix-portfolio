import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { MusicComponent } from './music.component';

const routes = [
  {
    path: '',
    component: MusicComponent
  }
];

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MusicModule { }

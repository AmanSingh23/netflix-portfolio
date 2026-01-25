import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileSelectionComponent } from './profile-selection.component';

const routes = [
  {
    path: '',
    component: ProfileSelectionComponent
  }
];

@NgModule({
  declarations: [
    ProfileSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileSelectionModule { }

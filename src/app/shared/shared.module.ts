import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ContentCardComponent } from './components/content-card/content-card.component';
import { ContentModalComponent } from './components/content-modal/content-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { TabNavigationComponent } from './components/tab-navigation/tab-navigation.component';
import { CertificationCardComponent } from './components/certification-card/certification-card.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { TagComponent } from './components/tag/tag.component';

// Directives
import { HoverZoomDirective } from './directives/hover-zoom.directive';
import { LazyLoadDirective } from './directives/lazy-load.directive';

// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    ContentCardComponent,
    ContentModalComponent,
    HeaderComponent,
    ContentSectionComponent,
    TabNavigationComponent,
    CertificationCardComponent,
    SkillCardComponent,
    TagComponent,
    HoverZoomDirective,
    LazyLoadDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContentCardComponent,
    ContentModalComponent,
    HeaderComponent,
    ContentSectionComponent,
    TabNavigationComponent,
    CertificationCardComponent,
    SkillCardComponent,
    TagComponent,
    HoverZoomDirective,
    LazyLoadDirective,
    TruncatePipe,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

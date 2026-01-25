import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSelectionGuard } from './core/guards/profile-selection.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/loading',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./features/loading/loading.module').then(m => m.LoadingModule)
  },
  {
    path: 'profile-selection',
    loadChildren: () => import('./features/profile-selection/profile-selection.module').then(m => m.ProfileSelectionModule),
    canActivate: [ProfileSelectionGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'content/:id',
    loadChildren: () => import('./features/content-detail/content-detail.module').then(m => m.ContentDetailModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'work-permit',
    loadChildren: () => import('./features/portfolio-sections/work-permit/work-permit.module').then(m => m.WorkPermitModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'professional',
    loadChildren: () => import('./features/portfolio-sections/professional/professional.module').then(m => m.ProfessionalModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'skills',
    loadChildren: () => import('./features/portfolio-sections/skills/skills.module').then(m => m.SkillsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'experience',
    loadChildren: () => import('./features/portfolio-sections/experience/experience.module').then(m => m.ExperienceModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'certifications',
    loadChildren: () => import('./features/portfolio-sections/certifications/certifications.module').then(m => m.CertificationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./features/portfolio-sections/recommendations/recommendations.module').then(m => m.RecommendationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/portfolio-sections/projects/projects.module').then(m => m.ProjectsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'music',
    loadChildren: () => import('./features/portfolio-sections/music/music.module').then(m => m.MusicModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reading',
    loadChildren: () => import('./features/portfolio-sections/reading/reading.module').then(m => m.ReadingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'blogs',
    loadChildren: () => import('./features/portfolio-sections/blogs/blogs.module').then(m => m.BlogsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/portfolio-sections/contact/contact.module').then(m => m.ContactModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/loading'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

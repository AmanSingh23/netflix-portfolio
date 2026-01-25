import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileService } from './profile.service';

export interface NavigationState {
  isMenuOpen: boolean;
  currentRoute: string;
  breadcrumbs: string[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationSubject = new BehaviorSubject<NavigationState>({
    isMenuOpen: false,
    currentRoute: '',
    breadcrumbs: []
  });

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) {
    this.router.events.subscribe(() => {
      this.updateCurrentRoute();
    });
  }

  get navigationState$(): Observable<NavigationState> {
    return this.navigationSubject.asObservable();
  }

  get isMenuOpen(): boolean {
    return this.navigationSubject.value.isMenuOpen;
  }

  toggleMenu(): void {
    const currentState = this.navigationSubject.value;
    this.navigationSubject.next({
      ...currentState,
      isMenuOpen: !currentState.isMenuOpen
    });
  }

  closeMenu(): void {
    const currentState = this.navigationSubject.value;
    this.navigationSubject.next({
      ...currentState,
      isMenuOpen: false
    });
  }

  openMenu(): void {
    const currentState = this.navigationSubject.value;
    this.navigationSubject.next({
      ...currentState,
      isMenuOpen: true
    });
  }

  navigateToProfileSelection(): void {
    this.profileService.clearSelectedProfile();
    this.router.navigate(['/profile-selection']);
  }

  navigateToDashboard(): void {
    if (this.profileService.isProfileSelected()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.navigateToProfileSelection();
    }
  }

  navigateToContent(contentId: string): void {
    this.router.navigate(['/content', contentId]);
  }

  goBack(): void {
    window.history.back();
  }

  private updateCurrentRoute(): void {
    const currentState = this.navigationSubject.value;
    const url = this.router.url;
    const breadcrumbs = this.generateBreadcrumbs(url);
    
    this.navigationSubject.next({
      ...currentState,
      currentRoute: url,
      breadcrumbs
    });
  }

  private generateBreadcrumbs(url: string): string[] {
    const segments = url.split('/').filter(segment => segment);
    const breadcrumbs: string[] = [];
    
    segments.forEach((segment, index) => {
      const breadcrumb = this.formatBreadcrumb(segment);
      breadcrumbs.push(breadcrumb);
    });
    
    return breadcrumbs;
  }

  private formatBreadcrumb(segment: string): string {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../../../core/services/profile.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { Profile } from '../../../core/models/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  selectedProfile: Profile | null = null;
  profiles: Profile[] = [];
  isScrolled = false;
  isProfileDropdownOpen = false;

  constructor(
    private profileService: ProfileService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileService.selectedProfile$
      .pipe(takeUntil(this.destroy$))
      .subscribe(profile => {
        this.selectedProfile = profile;
      });

    this.profileService.profiles$
      .pipe(takeUntil(this.destroy$))
      .subscribe(profiles => {
        this.profiles = profiles;
      });

    // Listen for scroll events
    window.addEventListener('scroll', this.onScroll.bind(this));
    
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    window.removeEventListener('scroll', this.onScroll.bind(this));
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  navigateToProfileSelection(): void {
    this.navigationService.navigateToProfileSelection();
  }

  navigateToDashboard(): void {
    this.navigationService.navigateToDashboard();
  }

  goBack(): void {
    this.navigationService.goBack();
  }

  getProfileInitials(): string {
    if (!this.selectedProfile) return '';
    return this.selectedProfile.name.substring(0, 2).toUpperCase();
  }

  getProfileInitialsForProfile(profile: Profile): string {
    return profile.name.substring(0, 2).toUpperCase();
  }

  toggleProfileDropdown(): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  selectProfile(profile: Profile): void {
    this.profileService.selectProfile(profile);
    this.isProfileDropdownOpen = false;
    this.router.navigate(['/dashboard']);
  }

  handleClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.header__profile-dropdown-wrapper')) {
      this.isProfileDropdownOpen = false;
    }
  }
}

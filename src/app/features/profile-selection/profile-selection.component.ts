import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../../core/services/profile.service';
import { Profile } from '../../core/models/profile.model';

@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss']
})
export class ProfileSelectionComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  profiles: Profile[] = [];
  selectedProfile: Profile | null = null;
  isLoading = true;

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProfiles(): void {
    this.profileService.profiles$
      .pipe(takeUntil(this.destroy$))
      .subscribe(profiles => {
        this.profiles = profiles;
        this.isLoading = false;
      });
  }

  selectProfile(profile: Profile): void {
    this.selectedProfile = profile;
    
    // Add selection animation delay
    setTimeout(() => {
      this.profileService.selectProfile(profile);
      this.router.navigate(['/dashboard']);
    }, 500);
  }

  onProfileHover(profile: Profile): void {
    // Optional: Add hover effects or preview functionality
  }

  getProfileInitials(profile: Profile): string {
    return profile.name.substring(0, 2).toUpperCase();
  }
}

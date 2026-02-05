import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile, ProfileSelectionState } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly STORAGE_KEY = 'netflix-portfolio-selected-profile';
  /** Only restore saved profile when this flag is set (user has completed profile selection at least once). First load = no flag = always go to profile-selection. */
  private readonly HAS_SELECTED_PROFILE_KEY = 'netflix-portfolio-has-selected-profile';

  private profilesSubject = new BehaviorSubject<Profile[]>([
    {
      id: 'Recruiter',
      name: 'RECRUITER',
      avatar: 'assets/images/profiles/Recruiter.png',
      isChild: false,
      color: '#0066CC'
    },
    {
      id: 'Developer',
      name: 'DEVELOPER',
      avatar: 'assets/images/profiles/developer.png',
      isChild: false,
      color: '#2F2F2F'
    },
    {
      id: 'Stalker',
      name: 'STALKER',
      avatar: 'assets/images/profiles/stalker.png',
      isChild: true,
      color: '#E50914'
    },
    {
      id: 'Journey',
      name: 'JOURNEY',
      avatar: 'assets/images/profiles/journey.png',
      isChild: false,
      color: '#FFD700'
    }
  ]);

  private selectedProfileSubject = new BehaviorSubject<Profile | null>(null);

  constructor() {
    this.loadSelectedProfile();
  }

  get profiles$(): Observable<Profile[]> {
    return this.profilesSubject.asObservable();
  }

  get selectedProfile$(): Observable<Profile | null> {
    return this.selectedProfileSubject.asObservable();
  }

  get profiles(): Profile[] {
    return this.profilesSubject.value;
  }

  get selectedProfile(): Profile | null {
    return this.selectedProfileSubject.value;
  }

  selectProfile(profile: Profile): void {
    this.selectedProfileSubject.next(profile);
    this.saveSelectedProfile(profile);
  }

  clearSelectedProfile(): void {
    this.selectedProfileSubject.next(null);
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.HAS_SELECTED_PROFILE_KEY);
  }

  isProfileSelected(): boolean {
    return this.selectedProfile !== null;
  }

  private loadSelectedProfile(): void {
    const hasSelectedBefore = localStorage.getItem(this.HAS_SELECTED_PROFILE_KEY);
    if (hasSelectedBefore !== 'true') {
      return;
    }
    const savedProfile = localStorage.getItem(this.STORAGE_KEY);
    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);
        this.selectedProfileSubject.next(profile);
      } catch (error) {
        console.error('Error loading saved profile:', error);
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.HAS_SELECTED_PROFILE_KEY);
      }
    }
  }

  private saveSelectedProfile(profile: Profile): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profile));
    localStorage.setItem(this.HAS_SELECTED_PROFILE_KEY, 'true');
  }

  getProfileState(): ProfileSelectionState {
    return {
      selectedProfile: this.selectedProfile,
      profiles: this.profiles
    };
  }
}

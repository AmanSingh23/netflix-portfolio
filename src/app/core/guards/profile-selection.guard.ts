import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileSelectionGuard implements CanActivate {
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.profileService.selectedProfile$.pipe(
      take(1),
      map(selectedProfile => {
        if (selectedProfile) {
          // Profile is already selected, redirect to dashboard
          this.router.navigate(['/dashboard']);
          return false;
        }
        // No profile selected, allow access to profile selection
        return true;
      })
    );
  }
}

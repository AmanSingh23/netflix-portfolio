import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.profileService.selectedProfile$.pipe(
      take(1),
      map(selectedProfile => {
        if (selectedProfile) {
          // Profile is selected, allow access
          return true;
        }
        // No profile selected, redirect to profile selection
        this.router.navigate(['/profile-selection']);
        return false;
      })
    );
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from '../../core/services/loading.service';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  loadingProgress = 0;
  loadingMessage = 'Loading...';
  isComplete = false;

  constructor(
    private loadingService: LoadingService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.startLoadingSequence();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private async startLoadingSequence(): Promise<void> {
    const steps = [
      { message: 'Initializing...', duration: 800 },
      { message: 'Loading profiles...', duration: 1000 },
      { message: 'Preparing content...', duration: 1200 },
      { message: 'Almost ready...', duration: 600 }
    ];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      this.loadingMessage = step.message;
      
      await this.animateProgress(
        (i / steps.length) * 100,
        ((i + 1) / steps.length) * 100,
        step.duration
      );
    }

    this.isComplete = true;
    this.loadingMessage = 'Welcome to Aman Singh\'s Portfolio!';
    
    // Wait a moment then navigate
    setTimeout(() => {
      this.navigateToNextPage();
    }, 1000);
  }

  private animateProgress(start: number, end: number, duration: number): Promise<void> {
    console.log('animateProgress', start, end, duration);
    return new Promise((resolve) => {
      const startTime = Date.now();
      console.log('startTime', startTime);
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);
        
        this.loadingProgress = start + (end - start) * this.easeOutCubic(progress);
        console.log('progress', this.loadingProgress);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      animate();
    });
  }

  private easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  private navigateToNextPage(): void {
    if (this.profileService.isProfileSelected()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/profile-selection']);
    }
  }
}

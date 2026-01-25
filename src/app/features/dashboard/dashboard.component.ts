import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../../core/services/profile.service';
import { ContentService } from '../../core/services/content.service';
import { NavigationService } from '../../core/services/navigation.service';
import { Profile } from '../../core/models/profile.model';
import { ContentItem } from '../../core/models/content-item.model';
import { ContentSection } from '../../core/models/section.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  @ViewChild('heroVideo', { static: false }) heroVideo?: ElementRef<HTMLVideoElement>;
  
  selectedProfile: Profile | null = null;
  sections: ContentSection[] = [];
  featuredContent: ContentItem[] = [];
  isLoading = true;
  selectedContent: ContentItem | null = null;
  isModalOpen = false;
  heroVideoUrl: string | null = 'assets/videos/hero-background.mp4';
  isVideoMuted = true;

  constructor(
    private profileService: ProfileService,
    private contentService: ContentService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadData(): void {
    // Load selected profile
    this.profileService.selectedProfile$
      .pipe(takeUntil(this.destroy$))
      .subscribe(profile => {
        this.selectedProfile = profile;
        if (!profile) {
          this.router.navigate(['/profile-selection']);
        }
      });

    // Load content sections
    this.contentService.sections$
      .pipe(takeUntil(this.destroy$))
      .subscribe(sections => {
        this.sections = sections;
        this.isLoading = false;
      });

    // Load featured content
    this.contentService.getFeaturedContent()
      .pipe(takeUntil(this.destroy$))
      .subscribe(content => {
        this.featuredContent = content;
      });
  }

  onContentClick(content: ContentItem): void {
    // Open modal for all content including skills
    this.selectedContent = content;
    this.isModalOpen = true;
  }

  onModalClose(): void {
    this.isModalOpen = false;
    this.selectedContent = null;
  }

  onModalPlay(content: ContentItem): void {
    // Navigate to content detail page
    this.router.navigate(['/content', content.id]);
  }

  navigateToProfileSelection(): void {
    this.navigationService.navigateToProfileSelection();
  }

  toggleMute(): void {
    if (this.heroVideo) {
      this.heroVideo.nativeElement.muted = !this.heroVideo.nativeElement.muted;
      this.isVideoMuted = this.heroVideo.nativeElement.muted;
    }
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/amansingh2311/', '_blank');
  }

  openResume(): void {
    // Open resume PDF file in a new tab
    const resumeUrl = 'assets/files/linkedin_to_resume-2.pdf';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  }
}

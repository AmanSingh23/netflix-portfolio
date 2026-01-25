import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { ContentService } from '../../core/services/content.service';
import { ContentItem } from '../../core/models/content-item.model';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  content: ContentItem | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.loadContent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadContent(): void {
    this.route.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => this.contentService.getContentById(params['id']))
      )
      .subscribe({
        next: (content) => {
          if (content) {
            this.content = content;
          } else {
            this.error = 'Content not found';
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.error = 'Failed to load content';
          this.isLoading = false;
          console.error('Error loading content:', error);
        }
      });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  getImageUrl(): string {
    return this.content?.image || '';
  }

  getThumbnailUrl(): string {
    return this.content?.thumbnail || this.content?.image || '';
  }
}

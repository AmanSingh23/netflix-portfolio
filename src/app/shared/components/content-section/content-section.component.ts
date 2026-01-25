import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentService } from '../../../core/services/content.service';
import { ContentItem } from '../../../core/models/content-item.model';
import { ContentSection as SectionModel } from '../../../core/models/section.model';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit, OnDestroy {
  @Input() section!: SectionModel;
  @Input() showTitle: boolean = true;
  @Input() maxItems: number = 10;
  @Output() itemClick = new EventEmitter<ContentItem>();

  private destroy$ = new Subject<void>();
  contentItems: ContentItem[] = [];
  isLoading = true;
  scrollPosition = 0;
  canScrollLeft = false;
  canScrollRight = true;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadContentItems();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadContentItems(): void {
    this.contentService.content$
      .pipe(takeUntil(this.destroy$))
      .subscribe(content => {
        this.contentItems = content.filter(item => 
          this.section.items.includes(item.id)
        ).slice(0, this.maxItems);
        
        this.isLoading = false;
        this.updateScrollButtons();
      });
  }

  onItemClick(item: ContentItem): void {
    this.itemClick.emit(item);
  }

  scrollLeft(): void {
    const container = document.getElementById(`section-${this.section.id}`);
    if (container) {
      const scrollAmount = 300;
      container.scrollLeft -= scrollAmount;
      this.updateScrollPosition();
    }
  }

  scrollRight(): void {
    const container = document.getElementById(`section-${this.section.id}`);
    if (container) {
      const scrollAmount = 300;
      container.scrollLeft += scrollAmount;
      this.updateScrollPosition();
    }
  }

  onScroll(event: Event): void {
    this.updateScrollPosition();
  }

  private updateScrollPosition(): void {
    const container = document.getElementById(`section-${this.section.id}`);
    if (container) {
      this.scrollPosition = container.scrollLeft;
      this.updateScrollButtons();
    }
  }

  private updateScrollButtons(): void {
    const container = document.getElementById(`section-${this.section.id}`);
    if (container) {
      this.canScrollLeft = this.scrollPosition > 0;
      this.canScrollRight = 
        this.scrollPosition < (container.scrollWidth - container.clientWidth);
    }
  }

  getSectionClasses(): string {
    const classes = ['content-section', `content-section--${this.section.type}`];
    
    if (this.section.isLazy) {
      classes.push('content-section--lazy');
    }
    
    return classes.join(' ');
  }
}

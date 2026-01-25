import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ContentItem } from '../../../core/models/content-item.model';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content!: ContentItem;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showInfo: boolean = true;
  @Input() isHoverable: boolean = true;
  @Output() cardClick = new EventEmitter<ContentItem>();

  constructor() {}

  ngOnInit(): void {}

  onCardClick(): void {
    this.cardClick.emit(this.content);
  }

  getCardClasses(): string {
    const classes = ['content-card', `content-card--${this.size}`];
    
    if (this.isHoverable) {
      classes.push('content-card--hoverable');
    }
    
    if (this.content.isFeatured) {
      classes.push('content-card--featured');
    }
    
    if (this.content.isNew) {
      classes.push('content-card--new');
    }
    
    return classes.join(' ');
  }

  getImageUrl(): string {
    // Map content IDs to background images
    const backgroundImageMap: { [key: string]: string } = {
      'work-permit': 'assets/images/backgrounds/visa.png',
      'skills': 'assets/images/backgrounds/technical_skills.png',
      'experience': 'assets/images/backgrounds/experience.png',
      'certifications': 'assets/images/backgrounds/certification.png',
      'recommendations': 'assets/images/backgrounds/recommendation.png',
      'projects': 'assets/images/backgrounds/portfolio.png',
      'portfolio': 'assets/images/backgrounds/portfolio.png',
      'music': 'assets/images/backgrounds/music.png',
      'reading': 'assets/images/backgrounds/reading.png',
      'blogs': 'assets/images/backgrounds/blog.png',
      'contact': 'assets/images/backgrounds/contact.png'
    };

    // Check if we have a background image for this content
    const backgroundImage = backgroundImageMap[this.content.id];
    if (backgroundImage) {
      return backgroundImage;
    }

    // Fallback to original thumbnail or image
    return this.content.thumbnail || this.content.image;
  }
}

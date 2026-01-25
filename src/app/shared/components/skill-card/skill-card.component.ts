import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export interface Skill {
  name: string;
  description: string;
}

export interface IconInfo {
  type: 'fontawesome' | 'simpleicon';
  value: string;
}

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillCardComponent {
  @Input() skill!: Skill;
  @Input() iconInfo?: IconInfo;

  getSimpleIconUrl(iconSlug: string): string {
    return `https://cdn.simpleicons.org/${iconSlug}/e50914`;
  }

  onIconError(event: Event, skillName: string): void {
    const img = event.target as HTMLImageElement;
    if (img && this.iconInfo?.type === 'simpleicon') {
      // Fallback: hide the image and show a placeholder or use Font Awesome
      img.style.display = 'none';
      // Could emit an event here to notify parent to use Font Awesome fallback
    }
  }
}

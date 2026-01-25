import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export type TagVariant = 'default' | 'badge' | 'certification';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {
  @Input() text: string = '';
  @Input() variant: TagVariant = 'default';
  @Input() color?: string; // For custom colors
}

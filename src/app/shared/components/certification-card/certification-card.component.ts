import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Certification } from '../../../core/models/certification.model';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationCardComponent {
  @Input() certification!: Certification;
  @Output() verify = new EventEmitter<Certification>();

  getLogoUrl(logoName?: string): string {
    if (!logoName) return '';
    return `https://cdn.simpleicons.org/${logoName}/ffffff`;
  }

  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }

  onVerifyClick(): void {
    if (this.certification.verifyUrl && !this.certification.isPursuing) {
      this.verify.emit(this.certification);
    }
  }

  openVerifyUrl(): void {
    if (this.certification.verifyUrl) {
      window.open(this.certification.verifyUrl, '_blank', 'noopener,noreferrer');
    }
  }
}

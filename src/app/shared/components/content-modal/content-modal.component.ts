import { Component, Input, Output, EventEmitter, OnDestroy, HostListener, ViewChild, ViewContainerRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { ContentItem } from '../../../core/models/content-item.model';

@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss']
})
export class ContentModalComponent implements OnDestroy, AfterViewInit, OnChanges {
  @Input() content: ContentItem | null = null;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() play = new EventEmitter<ContentItem>();
  @ViewChild('skillsContainer', { read: ViewContainerRef }) skillsContainer!: ViewContainerRef;
  @ViewChild('professionalContainer', { read: ViewContainerRef }) professionalContainer!: ViewContainerRef;
  @ViewChild('certificationsContainer', { read: ViewContainerRef }) certificationsContainer!: ViewContainerRef;

  private skillsComponentRef: any = null;
  private professionalComponentRef: any = null;
  private certificationsComponentRef: any = null;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.isOpen && this.isSkillsContent()) {
      this.loadSkillsComponent();
    }
    if (this.isOpen && this.isProfessionalContent()) {
      this.loadProfessionalComponent();
    }
    if (this.isOpen && this.isCertificationsContent()) {
      this.loadCertificationsComponent();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (changes['isOpen'].currentValue) {
        if (this.isSkillsContent()) {
          setTimeout(() => this.loadSkillsComponent(), 100);
        }
        if (this.isProfessionalContent()) {
          setTimeout(() => this.loadProfessionalComponent(), 100);
        }
        if (this.isCertificationsContent()) {
          setTimeout(() => this.loadCertificationsComponent(), 100);
        }
      } else {
        this.clearSkillsComponent();
        this.clearProfessionalComponent();
        this.clearCertificationsComponent();
      }
    }
    if (changes['content']) {
      if (this.isOpen && this.isSkillsContent()) {
        setTimeout(() => this.loadSkillsComponent(), 100);
      }
      if (this.isOpen && this.isProfessionalContent()) {
        setTimeout(() => this.loadProfessionalComponent(), 100);
      }
      if (this.isOpen && this.isCertificationsContent()) {
        setTimeout(() => this.loadCertificationsComponent(), 100);
      }
    }
  }

  ngOnDestroy(): void {
    this.clearSkillsComponent();
    this.clearProfessionalComponent();
    this.clearCertificationsComponent();
  }

  async loadSkillsComponent(): Promise<void> {
    if (!this.isOpen || !this.isSkillsContent()) {
      return;
    }
    
    if (!this.skillsContainer || this.skillsComponentRef) return;
    
    try {
      const { SkillsComponent } = await import('../../../features/portfolio-sections/skills/skills.component');
      this.skillsComponentRef = this.skillsContainer.createComponent(SkillsComponent);
      this.skillsComponentRef.instance.hideHeader = true;
    } catch (error) {
      console.error('Error loading skills component:', error);
    }
  }

  clearSkillsComponent(): void {
    if (this.skillsComponentRef) {
      this.skillsComponentRef.destroy();
      this.skillsComponentRef = null;
    }
    if (this.skillsContainer) {
      this.skillsContainer.clear();
    }
  }

  async loadProfessionalComponent(): Promise<void> {
    if (!this.isOpen || !this.isProfessionalContent()) {
      return;
    }
    
    if (!this.professionalContainer || this.professionalComponentRef) return;
    
    try {
      const { ProfessionalComponent } = await import('../../../features/portfolio-sections/professional/professional.component');
      this.professionalComponentRef = this.professionalContainer.createComponent(ProfessionalComponent);
      this.professionalComponentRef.instance.hideHeader = true;
    } catch (error) {
      console.error('Error loading professional component:', error);
    }
  }

  clearProfessionalComponent(): void {
    if (this.professionalComponentRef) {
      this.professionalComponentRef.destroy();
      this.professionalComponentRef = null;
    }
    if (this.professionalContainer) {
      this.professionalContainer.clear();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isOpen) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  onPlay(): void {
    if (this.content) {
      this.play.emit(this.content);
    }
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  getImageUrl(): string {
    return this.content?.image || '';
  }

  isSkillsContent(): boolean {
    return this.content?.id === 'skills';
  }

  isProfessionalContent(): boolean {
    return this.content?.id === 'experience';
  }

  async loadCertificationsComponent(): Promise<void> {
    if (!this.isOpen || !this.isCertificationsContent()) {
      return;
    }
    
    if (!this.certificationsContainer || this.certificationsComponentRef) return;
    
    try {
      const { CertificationsComponent } = await import('../../../features/portfolio-sections/certifications/certifications.component');
      this.certificationsComponentRef = this.certificationsContainer.createComponent(CertificationsComponent);
      this.certificationsComponentRef.instance.hideHeader = true;
    } catch (error) {
      console.error('Error loading certifications component:', error);
    }
  }

  clearCertificationsComponent(): void {
    if (this.certificationsComponentRef) {
      this.certificationsComponentRef.destroy();
      this.certificationsComponentRef = null;
    }
    if (this.certificationsContainer) {
      this.certificationsContainer.clear();
    }
  }

  isCertificationsContent(): boolean {
    return this.content?.id === 'certifications';
  }
}

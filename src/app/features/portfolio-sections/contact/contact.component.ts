import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('profileCard') profileCard!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;
  profile = {
    name: 'Aman Singh',
    title: 'Application Development Senior Analyst',
    summary: 'Frontend Developer with 5+ years of experience delivering scalable web and hybrid mobile applications, including work for Fortune 500 clients such as Citi Bank at Accenture. Expert in Angular (v12+), JavaScript, RxJS, Ionic, and responsive design.',
    affiliation: 'George Brown College | SDM College of Engineering and Technology',
    linkedinUrl: 'https://www.linkedin.com/in/aman-singh-231196am',
    email: 'aman.p.a.singh26@gmail.com',
    phone: '+1 437-662-0474'
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    setTimeout(() => {
      if (this.profileCard?.nativeElement) {
        observer.observe(this.profileCard.nativeElement);
      }
      if (this.contactSection?.nativeElement) {
        observer.observe(this.contactSection.nativeElement);
      }
    }, 0);
  }

  openLinkedIn(): void {
    window.open(this.profile.linkedinUrl, '_blank');
  }

  openEmail(): void {
    window.location.href = `mailto:${this.profile.email}`;
  }

  openPhone(): void {
    window.location.href = `tel:${this.profile.phone}`;
  }

}

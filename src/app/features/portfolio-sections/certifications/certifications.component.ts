import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Certification } from '../../../core/models/certification.model';
import { Tab } from '../../../shared/components/tab-navigation/tab-navigation.component';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsComponent implements OnInit {
  @Input() hideHeader: boolean = false;

  activeTabId: string = 'all';
  
  tabs: Tab[] = [
    { id: 'all', label: 'All' },
    { id: 'security', label: 'Security' },
    { id: 'development', label: 'Development' }
  ];
  
  certifications: Certification[] = [
    {
      id: '1',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'APIsec University',
      category: 'development',
      issuedDate: 'Apr 2025',
      expiryDate: 'Feb 2024',
      logoName: 'amazonaws',
      tags: ['RAM', 'Theory', 'AdHoc', 'Commission'],
      verifyUrl: '#'
    },
    {
      id: '2',
      title: 'Microsoft API Security Fundamentals',
      issuer: 'Microsoft',
      category: 'security',
      issuedDate: 'Mar 2025',
      expiryDate: 'Mar 2026',
      logoName: 'microsoft',
      tags: ['API Security', 'Fundamentals'],
      verifyUrl: '#',
      badges: ['APISEC', 'APIFUNC']
    },
    {
      id: '3',
      title: 'ISC2 Certified in Cybersecurity',
      issuer: 'ISC2',
      category: 'security',
      issuedDate: 'Jan 2025',
      expiryDate: 'Jan 2028',
      logoName: 'isc2',
      tags: ['Cybersecurity', 'Security Fundamentals'],
      verifyUrl: '#'
    },
    {
      id: '4',
      title: 'AWS Solutions Architect Associate',
      issuer: 'AWS',
      category: 'development',
      issuedDate: 'Dec 2024',
      expiryDate: 'Dec 2027',
      logoName: 'amazonaws',
      tags: ['Cloud Architecture', 'AWS', 'Solutions'],
      verifyUrl: '#'
    },
    {
      id: '5',
      title: 'Angular Expert Certification',
      issuer: 'Google',
      category: 'development',
      issuedDate: 'Nov 2024',
      expiryDate: 'Nov 2026',
      logoName: 'angular',
      tags: ['Angular', 'TypeScript', 'Frontend'],
      verifyUrl: '#'
    },
    {
      id: '6',
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      category: 'development',
      issuedDate: 'Oct 2024',
      expiryDate: 'Oct 2027',
      logoName: 'microsoftazure',
      tags: ['Azure', 'Cloud', 'Fundamentals'],
      verifyUrl: '#'
    },
    {
      id: '7',
      title: 'Certified Ethical Hacker',
      issuer: 'EC-Council',
      category: 'security',
      issuedDate: 'Sep 2024',
      expiryDate: 'Sep 2027',
      logoName: 'eccouncil',
      tags: ['Ethical Hacking', 'Security', 'Penetration Testing'],
      verifyUrl: '#'
    },
    {
      id: '8',
      title: 'AWS Solutions Associate',
      issuer: 'AWS',
      category: 'development',
      isPursuing: true,
      eta: 'Late 2026',
      logoName: 'amazonaws',
      tags: ['AWS', 'Solutions Architecture', 'In Progress']
    }
  ];

  filteredCertifications: Certification[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterCertifications();
  }

  onTabChange(tabId: string): void {
    this.activeTabId = tabId;
    this.filterCertifications();
  }

  filterCertifications(): void {
    if (this.activeTabId === 'all') {
      this.filteredCertifications = this.certifications;
    } else {
      this.filteredCertifications = this.certifications.filter(cert => 
        cert.category === this.activeTabId || cert.category === 'both'
      );
    }
  }

  onVerify(cert: Certification): void {
    if (cert.verifyUrl) {
      window.open(cert.verifyUrl, '_blank', 'noopener,noreferrer');
    }
  }
}

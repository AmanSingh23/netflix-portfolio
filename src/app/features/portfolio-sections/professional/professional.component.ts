import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { WorkExperience, Education } from '../../../core/models/experience.model';

interface TimelineItem {
  type: 'work' | 'education';
  data: WorkExperience | Education;
}

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit, AfterViewInit {
  @Input() hideHeader: boolean = false;
  timelineItems: TimelineItem[] = [];
  @ViewChildren('timelineItem') timelineItemElements!: QueryList<ElementRef>;
  @ViewChildren('bottomIcon') bottomIconElements!: QueryList<ElementRef>;

  workExperiences: WorkExperience[] = [
    {
      id: '1',
      position: 'Department Manager',
      company: 'Starbucks',
      technologies: ['POS Systems', 'Retail Management Systems', 'Data Analysis'],
      achievements: [
        'Managed daily store operations and developed high-performing teams through coaching and leadership',
        'Managed point-of-sale (POS) systems and troubleshot technical issues, ensuring minimal downtime and seamless transaction processing during peak hours',
        'Analyzed sales data and generated reports using retail management systems to identify trends and optimize inventory management',
        'Enhanced customer satisfaction by maintaining service excellence standards and operational efficiency'
      ],
      startDate: 'Sep 2025',
      endDate: 'Dec 2025',
      isPresent: false
    },
    {
      id: '2',
      position: 'Freelance Frontend Developer',
      company: 'Self-employed',
      technologies: ['Web Development', 'Mobile Applications', 'API Security Testing', 'Burp Suite', 'OWASP ZAP'],
      achievements: [
        'Delivered web and mobile applications for clients with a focus on performance, clean code, and secure authentication',
        'Conducted API security testing using Burp Suite and OWASP ZAP, identifying vulnerabilities before production',
        'Integrated RESTful APIs and third-party services, ensuring seamless data flow and implementing error handling strategies to enhance application reliability and user experience'
      ],
      startDate: 'Feb 2025',
      endDate: 'Sep 2025',
      isPresent: false
    },
    {
      id: '3',
      position: 'Application Development Senior Analyst',
      company: 'Accenture',
      technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Jasmine', 'Karma', 'CI/CD', 'Splunk'],
      achievements: [
        'Led enterprise-scale Angular applications for Fortune 500 banking clients including Citi Bank and retail clients, supported 500K+ active users with 99.9% uptime',
        'Improved application performance by refactoring modules, introducing lazy loading, and optimizing caching, reducing load times from 4s to 3s',
        'Designed and implemented NgRx-based state management that reduced API calls by roughly 40% and improved data consistency',
        'Acting frontend lead for a small team: conducted code reviews, established coding standards, and mentored junior developers, reducing production bugs by 35%',
        'Acted as secondary client point of contact on requirements and sprint planning, led technical demos, and maintained strong relationships throughout projects',
        'Collaborated with cross-functional teams (backend, UX, QA) to deliver features, including testing with Jasmine/Karma and setting up CI/CD pipelines'
      ],
      startDate: 'Jun 2022',
      endDate: 'Aug 2023',
      isPresent: false
    },
    {
      id: '4',
      position: 'Application Development Analyst',
      company: 'Accenture',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'RESTful APIs', 'Splunk'],
      achievements: [
        'Developed responsive and accessible UI components using Angular, TypeScript, and SCSS, ensuring cross-browser compatibility and WCAG 2.1 compliance',
        'Ran usability testing and resolved 150+ bugs, which improved application stability and user satisfaction by about 25%',
        'Integrated frontend with RESTful APIs using RxJS operators for efficient data transformation, implementing error handling and loading states',
        'Led Angular version migration to align with security standards while collaborating with the backend team to optimize API responses',
        'Provided production support, including log analysis using Splunk, troubleshooting issues, and maintaining technical documentation'
      ],
      startDate: 'Dec 2021',
      endDate: 'May 2022',
      isPresent: false
    },
    {
      id: '5',
      position: 'Application Development Associate',
      company: 'Accenture',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'RESTful APIs', 'Chrome DevTools'],
      achievements: [
        'Built dynamic user interfaces, translating design specifications and wireframes into pixel-perfect, fully functional responsive web pages using HTML5, CSS3, and JavaScript with cross-browser compatibility',
        'Integrated third-party APIs and services, including payment gateways, analytics platforms, and social media SDKs',
        'Debugged and resolved complex frontend issues using Chrome DevTools, reducing average resolution time by 40%',
        'Ran thorough testing for integration quality and collaborated with the backend team on RESTful API implementations',
        'Participated in Agile ceremonies, including daily standups, sprint planning, and retrospectives, contributing to continuous team improvement'
      ],
      startDate: 'Jul 2019',
      endDate: 'Nov 2021',
      isPresent: false
    }
  ];

  education: Education[] = [
    {
      id: '1',
      degree: 'Graduate Certificate in Wireless Networking',
      institution: 'George Brown College',
      achievements: [],
      startDate: 'Sep 2024',
      endDate: 'Dec 2024',
      isPresent: false
    },
    {
      id: '2',
      degree: 'Graduate Certificate in Cyber Security',
      institution: 'George Brown College',
      achievements: [
        'Coursework: Application Security, Network Security, Incident Response, Security Operations, Digital Forensics, Legality and compliance'
      ],
      startDate: 'Sep 2023',
      endDate: 'Aug 2024',
      isPresent: false
    },
    {
      id: '3',
      degree: 'Bachelor Of Engineering in Computer Science',
      institution: 'SDM College of Engineering and Technology',
      achievements: [],
      startDate: 'Aug 2015',
      endDate: 'Jun 2019',
      isPresent: false
    }
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // Combine work experiences and education into a single timeline
    // Chronological order (most recent first): alternating left/right
    // Starbucks (left), Freelance (right), Wireless Networking (left), Cyber Security (right),
    // Senior Analyst (left), Analyst (right), Associate (left), Bachelor's (right)
    this.timelineItems = [
      { type: 'work', data: this.workExperiences[0] },      // Starbucks - Sep 2025
      { type: 'work', data: this.workExperiences[1] },      // Freelance - Feb 2025
      { type: 'education', data: this.education[0] },       // Wireless Networking - Sep 2024
      { type: 'education', data: this.education[1] },       // Cyber Security - Sep 2023
      { type: 'work', data: this.workExperiences[2] },      // Senior Analyst - Jun 2022
      { type: 'work', data: this.workExperiences[3] },      // Analyst - Dec 2021
      { type: 'work', data: this.workExperiences[4] },      // Associate - Jul 2019
      { type: 'education', data: this.education[2] }        // Bachelor's - Aug 2015
    ];
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all timeline items
    setTimeout(() => {
      this.timelineItemElements.forEach(item => {
        if (item.nativeElement) {
          observer.observe(item.nativeElement);
        }
      });
      
      // Observe bottom icon
      this.bottomIconElements.forEach(item => {
        if (item.nativeElement) {
          observer.observe(item.nativeElement);
        }
      });
    }, 0);
  }

  getWorkExperience(item: TimelineItem): WorkExperience {
    return item.data as WorkExperience;
  }

  getEducation(item: TimelineItem): Education {
    return item.data as Education;
  }

}


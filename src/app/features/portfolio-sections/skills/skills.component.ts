import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconInfo } from '../../../shared/components/skill-card/skill-card.component';

export interface Skill {
  name: string;
  description: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @Input() hideHeader: boolean = false;
  @ViewChildren('skillCard') skillCardElements!: QueryList<ElementRef>;
  @ViewChildren('categoryTitle') categoryTitleElements!: QueryList<ElementRef>;
  skillCategories: SkillCategory[] = [
    {
      title: 'Language & Core',
      skills: [
        { name: 'JavaScript (ES6+)', description: 'Programming Language', icon: 'javascript' },
        { name: 'TypeScript', description: 'Type-safe JavaScript', icon: 'typescript' },
        { name: 'HTML5', description: 'Web Markup Language', icon: 'htmlcss' },
        { name: 'CSS3', description: 'Styling Language', icon: 'htmlcss' },
        { name: 'SASS/SCSS', description: 'CSS Preprocessor', icon: 'htmlcss' }
      ]
    },
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Angular (v4-16+)', description: 'Frontend Framework', icon: 'angular' },
        { name: 'AngularJS', description: 'JavaScript Framework', icon: 'angular' },
        { name: 'SPA', description: 'Single Page Applications', icon: 'spa' }
      ]
    },
    {
      title: 'UI/CSS Frameworks',
      skills: [
        { name: 'Bootstrap', description: 'CSS Framework', icon: 'bootstrap' },
        { name: 'Material UI', description: 'React Component Library', icon: 'material' },
        { name: 'Tailwind', description: 'Utility-first CSS Framework', icon: 'tailwind' },
        { name: 'Responsive Design', description: 'Mobile-first Design', icon: 'responsive' }
      ]
    },
    {
      title: 'State Management',
      skills: [
        { name: 'NgRx', description: 'Angular State Management', icon: 'ngrx' },
        { name: 'Redux', description: 'State Management Library', icon: 'redux' },
        { name: 'RxJS', description: 'Reactive Extensions', icon: 'rxjs' },
        { name: 'Context API', description: 'React State Management', icon: 'context' }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Ionic', description: 'Hybrid Mobile Framework', icon: 'ionic' },
        { name: 'Capacitor', description: 'Cross-platform Native Runtime', icon: 'capacitor' },
        { name: 'Cordova', description: 'Mobile App Framework', icon: 'cordova' },
        { name: 'PWA', description: 'Progressive Web Apps', icon: 'pwa' }
      ]
    },
    {
      title: 'APIs & Integration',
      skills: [
        { name: 'RESTful APIs', description: 'API Architecture', icon: 'rest' },
        { name: 'GraphQL', description: 'Query Language for APIs', icon: 'graphql' },
        { name: 'Postman', description: 'API Testing Tool', icon: 'postman' },
        { name: 'Swagger', description: 'API Documentation', icon: 'swagger' }
      ]
    },
    {
      title: 'Testing',
      skills: [
        { name: 'Jasmine', description: 'Testing Framework', icon: 'jasmine' },
        { name: 'Karma', description: 'Test Runner', icon: 'karma' },
        { name: 'Jest', description: 'JavaScript Testing Framework', icon: 'jest' },
        { name: 'Unit Testing', description: 'Component Testing', icon: 'testing' },
        { name: 'Integration Testing', description: 'System Integration Tests', icon: 'testing' },
        { name: 'E2E Testing', description: 'End-to-End Testing', icon: 'testing' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', description: 'Cloud Platform (EC2, S3, Lambda, CloudFront)', icon: 'aws' },
        { name: 'Docker', description: 'Containerization', icon: 'docker' },
        { name: 'Kubernetes', description: 'Container Orchestration', icon: 'kubernetes' },
        { name: 'Jenkins', description: 'CI/CD Automation', icon: 'jenkins' },
        { name: 'CI/CD Pipelines', description: 'Continuous Integration & Delivery', icon: 'cicd' },
        { name: 'Shell/BASH', description: 'Shell Scripting', icon: 'bash' }
      ]
    },
    {
      title: 'Build Tools',
      skills: [
        { name: 'Webpack', description: 'Module Bundler', icon: 'webpack' },
        { name: 'Angular CLI', description: 'Angular Command Line Tool', icon: 'angular' },
        { name: 'NPM', description: 'Package Manager', icon: 'npm' }
      ]
    },
    {
      title: 'Version Control',
      skills: [
        { name: 'Git', description: 'Version Control System', icon: 'git' },
        { name: 'GitHub', description: 'Code Repository', icon: 'github' },
        { name: 'Bitbucket', description: 'Git Repository Hosting', icon: 'bitbucket' },
        { name: 'GitHub Actions', description: 'CI/CD Automation', icon: 'github' },
        { name: 'AWS CodeCommit', description: 'Source Control Service', icon: 'aws' }
      ]
    },
    {
      title: 'Security & Forensics',
      skills: [
        { name: 'Burp Suite', description: 'Web Security Testing', icon: 'burp' },
        { name: 'Wireshark', description: 'Network Protocol Analyzer', icon: 'wireshark' },
        { name: 'Metasploit', description: 'Penetration Testing', icon: 'metasploit' },
        { name: 'OWASP ZAP', description: 'Security Testing Tool', icon: 'owasp' },
        { name: 'Autopsy', description: 'Digital Forensics', icon: 'autopsy' },
        { name: 'OAuth', description: 'Authentication Protocol', icon: 'oauth' },
        { name: 'JWT', description: 'JSON Web Tokens', icon: 'jwt' },
        { name: 'API Security', description: 'API Security Testing', icon: 'security' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', description: 'NoSQL Database', icon: 'mongodb' },
        { name: 'MySQL', description: 'Relational Database', icon: 'mysql' },
        { name: 'PostgreSQL', description: 'Relational Database', icon: 'postgresql' },
        { name: 'Firebase', description: 'Backend-as-a-Service', icon: 'firebase' }
      ]
    },
    {
      title: 'Monitoring & Logging',
      skills: [
        { name: 'Splunk', description: 'Log Analysis Platform', icon: 'splunk' },
        { name: 'Sumologic', description: 'Log Management Platform', icon: 'sumologic' }
      ]
    },
    {
      title: 'Project Management',
      skills: [
        { name: 'JIRA', description: 'Project Management Tool', icon: 'jira' },
        { name: 'Confluence', description: 'Collaboration Tool', icon: 'confluence' },
        { name: 'Agile/Scrum', description: 'Development Methodology', icon: 'agile' },
        { name: 'Code Reviews', description: 'Code Quality Assurance', icon: 'code-review' },
        { name: 'Technical Documentation', description: 'Documentation Practices', icon: 'docs' }
      ]
    }
  ];

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
      this.skillCardElements.forEach(card => {
        if (card.nativeElement) {
          observer.observe(card.nativeElement);
        }
      });
      
      this.categoryTitleElements.forEach(title => {
        if (title.nativeElement) {
          observer.observe(title.nativeElement);
        }
      });
    }, 0);
  }

  getIconInfo(skillName: string): IconInfo {
    // Simple Icons mapping for tech logos (better brand representation)
    const simpleIconsMap: { [key: string]: string } = {
      // Language & Core
      'TypeScript': 'typescript',
      'JavaScript (ES6+)': 'javascript',
      'HTML5': 'html5',
      'CSS3': 'css3',
      'SASS/SCSS': 'sass',
      
      // Frontend Frameworks
      'Angular (v4-16+)': 'angular',
      'AngularJS': 'angular',
      
      // UI/CSS Frameworks
      'Bootstrap': 'bootstrap',
      'Material UI': 'materialdesign',
      'Tailwind': 'tailwindcss',
      
      // State Management
      'NgRx': 'angular',
      'Redux': 'redux',
      'RxJS': 'rxjs',
      
      // Mobile Development
      'Ionic': 'ionic',
      'Capacitor': 'capacitor',
      'Cordova': 'apachecordova',
      'PWA': 'pwa',
      
      // APIs & Integration
      'GraphQL': 'graphql',
      'Postman': 'postman',
      'Swagger': 'swagger',
      
      // Testing
      'Jest': 'jest',
      'Jasmine': 'jasmine',
      'Karma': 'karma',
      
      // Cloud & DevOps
      'AWS': 'amazonaws',
      'Docker': 'docker',
      'Kubernetes': 'kubernetes',
      'Jenkins': 'jenkins',
      
      // Build Tools
      'Webpack': 'webpack',
      'NPM': 'npm',
      
      // Version Control
      'Git': 'git',
      'GitHub': 'github',
      'Bitbucket': 'bitbucket',
      'GitHub Actions': 'githubactions',
      
      // Databases
      'MongoDB': 'mongodb',
      'PostgreSQL': 'postgresql',
      'MySQL': 'mysql',
      'Firebase': 'firebase',
      
      // Monitoring & Logging
      'Splunk': 'splunk',
      'Sumologic': 'sumologic',
      
      // Project Management
      'JIRA': 'jira',
      'Confluence': 'confluence'
    };

    // Check if Simple Icons has this icon
    if (simpleIconsMap[skillName]) {
      return {
        type: 'simpleicon',
        value: simpleIconsMap[skillName]
      };
    }

    // Fallback to Font Awesome
    const iconMap: { [key: string]: string } = {
      // Language & Core
      'JavaScript (ES6+)': 'fab fa-js-square',
      'TypeScript': 'fab fa-typescript',
      'HTML5': 'fab fa-html5',
      'CSS3': 'fab fa-css3-alt',
      'SASS/SCSS': 'fab fa-sass',
      
      // Frontend Frameworks
      'Angular (v4-16+)': 'fab fa-angular',
      'AngularJS': 'fab fa-angular',
      'SPA': 'fas fa-window-maximize',
      
      // UI/CSS Frameworks
      'Bootstrap': 'fab fa-bootstrap',
      'Material UI': 'fab fa-google',
      'Tailwind': 'fas fa-wind',
      'Responsive Design': 'fas fa-mobile-alt',
      
      // State Management
      'NgRx': 'fab fa-angular',
      'Redux': 'fab fa-react',
      'RxJS': 'fas fa-project-diagram',
      'Context API': 'fas fa-code-branch',
      
      // Mobile Development
      'Ionic': 'fab fa-ionic',
      'Capacitor': 'fas fa-bolt',
      'Cordova': 'fas fa-mobile-alt',
      'PWA': 'fas fa-mobile-alt',
      
      // APIs & Integration
      'RESTful APIs': 'fas fa-plug',
      'GraphQL': 'fab fa-graphql',
      'Postman': 'fas fa-paper-plane',
      'Swagger': 'fas fa-file-code',
      
      // Testing
      'Jasmine': 'fas fa-vial',
      'Karma': 'fas fa-vial',
      'Jest': 'fas fa-check-circle',
      'Unit Testing': 'fas fa-vial',
      'Integration Testing': 'fas fa-sitemap',
      'E2E Testing': 'fas fa-check-double',
      
      // Cloud & DevOps
      'AWS': 'fab fa-aws',
      'Docker': 'fab fa-docker',
      'Kubernetes': 'fab fa-kubernetes',
      'Jenkins': 'fab fa-jenkins',
      'CI/CD Pipelines': 'fas fa-sync-alt',
      'Shell/BASH': 'fas fa-terminal',
      
      // Build Tools
      'Webpack': 'fab fa-js',
      'Angular CLI': 'fab fa-angular',
      'NPM': 'fab fa-npm',
      
      // Version Control
      'Git': 'fab fa-git-alt',
      'GitHub': 'fab fa-github',
      'Bitbucket': 'fab fa-bitbucket',
      'GitHub Actions': 'fab fa-github',
      'AWS CodeCommit': 'fab fa-aws',
      
      // Security & Forensics
      'Burp Suite': 'fas fa-shield-alt',
      'Wireshark': 'fas fa-network-wired',
      'Metasploit': 'fas fa-bug',
      'OWASP ZAP': 'fas fa-shield-alt',
      'Autopsy': 'fas fa-search',
      'OAuth': 'fas fa-key',
      'JWT': 'fas fa-key',
      'API Security': 'fas fa-shield-alt',
      
      // Databases
      'MongoDB': 'fab fa-mongodb',
      'MySQL': 'fas fa-database',
      'PostgreSQL': 'fas fa-database',
      'Firebase': 'fab fa-firebase',
      
      // Monitoring & Logging
      'Splunk': 'fas fa-chart-line',
      'Sumologic': 'fas fa-chart-bar',
      
      // Project Management
      'JIRA': 'fab fa-jira',
      'Confluence': 'fab fa-confluence',
      'Agile/Scrum': 'fas fa-tasks',
      'Code Reviews': 'fas fa-code',
      'Technical Documentation': 'fas fa-book'
    };

    // Try exact match first
    if (iconMap[skillName]) {
      return {
        type: 'fontawesome',
        value: iconMap[skillName]
      };
    }

    // Try partial match
    const lowerName = skillName.toLowerCase();
    for (const key in iconMap) {
      if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
        return {
          type: 'fontawesome',
          value: iconMap[key]
        };
      }
    }

    // Default icon
    return {
      type: 'fontawesome',
      value: 'fas fa-code'
    };
  }

  getSimpleIconUrl(iconSlug: string): string {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconSlug}.svg`;
  }

  onIconError(event: any, skillName: string): void {
    // Fallback to Font Awesome if Simple Icon fails to load
    const iconInfo = this.getIconInfo(skillName);
    if (iconInfo.type === 'simpleicon') {
      // Switch to Font Awesome fallback
      event.target.style.display = 'none';
      const fallbackIcon = document.createElement('i');
      fallbackIcon.className = this.getFontAwesomeFallback(skillName);
      event.target.parentElement?.appendChild(fallbackIcon);
    }
  }

  getFontAwesomeFallback(skillName: string): string {
    // Fallback mapping for when Simple Icons fail
    const fallbackMap: { [key: string]: string } = {
      'TypeScript': 'fab fa-typescript',
      'JavaScript (ES6+)': 'fab fa-js-square',
      'HTML5': 'fab fa-html5',
      'CSS3': 'fab fa-css3-alt',
      'SASS/SCSS': 'fab fa-sass',
      'Angular (v4-16+)': 'fab fa-angular',
      'AngularJS': 'fab fa-angular',
      'Bootstrap': 'fab fa-bootstrap',
      'Material UI': 'fab fa-google',
      'Tailwind': 'fas fa-wind',
      'Redux': 'fab fa-react',
      'RxJS': 'fas fa-project-diagram',
      'Ionic': 'fab fa-ionic',
      'GraphQL': 'fab fa-graphql',
      'Postman': 'fas fa-paper-plane',
      'Jest': 'fas fa-check-circle',
      'AWS': 'fab fa-aws',
      'Docker': 'fab fa-docker',
      'Kubernetes': 'fab fa-kubernetes',
      'Jenkins': 'fab fa-jenkins',
      'Webpack': 'fab fa-js',
      'NPM': 'fab fa-npm',
      'Git': 'fab fa-git-alt',
      'GitHub': 'fab fa-github',
      'Bitbucket': 'fab fa-bitbucket',
      'MongoDB': 'fab fa-mongodb',
      'PostgreSQL': 'fas fa-database',
      'MySQL': 'fas fa-database',
      'Firebase': 'fab fa-firebase',
      'JIRA': 'fab fa-jira',
      'Confluence': 'fab fa-confluence'
    };
    return fallbackMap[skillName] || 'fas fa-code';
  }

}

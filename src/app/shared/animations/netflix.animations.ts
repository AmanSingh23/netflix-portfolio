import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const netflixAnimations = [
  // Netflix-style loading animation
  trigger('netflixLoading', [
    state('loading', style({ opacity: 1 })),
    state('loaded', style({ opacity: 0, transform: 'scale(1.1)' })),
    transition('loading => loaded', [
      animate('0.8s ease-in-out', keyframes([
        style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
        style({ opacity: 0.8, transform: 'scale(1.05)', offset: 0.5 }),
        style({ opacity: 0, transform: 'scale(1.1)', offset: 1 })
      ]))
    ])
  ]),

  // Profile selection animation
  trigger('profileCard', [
    state('inactive', style({ transform: 'scale(1)', opacity: 0.7 })),
    state('active', style({ transform: 'scale(1.1)', opacity: 1 })),
    transition('inactive => active', [
      animate('0.3s ease-out')
    ]),
    transition('active => inactive', [
      animate('0.3s ease-in')
    ])
  ]),

  // Content card hover animation
  trigger('contentCardHover', [
    state('normal', style({ 
      transform: 'scale(1) translateY(0)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
    })),
    state('hovered', style({ 
      transform: 'scale(1.05) translateY(-8px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)'
    })),
    transition('normal => hovered', [
      animate('0.3s ease-out')
    ]),
    transition('hovered => normal', [
      animate('0.3s ease-in')
    ])
  ]),

  // Stagger animation for content rows
  trigger('staggerContent', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(100, [
          animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ]),

  // Modal entrance animation
  trigger('modalEnter', [
    state('closed', style({ 
      opacity: 0, 
      transform: 'scale(0.8) translateY(-50px)' 
    })),
    state('open', style({ 
      opacity: 1, 
      transform: 'scale(1) translateY(0)' 
    })),
    transition('closed => open', [
      animate('0.4s cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    transition('open => closed', [
      animate('0.3s ease-in')
    ])
  ]),

  // Header scroll animation
  trigger('headerScroll', [
    state('top', style({ 
      background: 'transparent',
      backdropFilter: 'none'
    })),
    state('scrolled', style({ 
      background: 'rgba(20, 20, 20, 0.95)',
      backdropFilter: 'blur(10px)'
    })),
    transition('top => scrolled', [
      animate('0.3s ease-out')
    ]),
    transition('scrolled => top', [
      animate('0.3s ease-in')
    ])
  ]),

  // Page transition animation
  trigger('pageTransition', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
      animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      animate('0.3s ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
    ])
  ]),

  // Loading spinner animation
  trigger('spinner', [
    state('spinning', style({ transform: 'rotate(360deg)' })),
    transition('* => spinning', [
      animate('1s linear infinite')
    ])
  ]),

  // Pulse animation for interactive elements
  trigger('pulse', [
    state('normal', style({ transform: 'scale(1)' })),
    state('pulsing', style({ transform: 'scale(1.05)' })),
    transition('normal => pulsing', [
      animate('0.2s ease-out')
    ]),
    transition('pulsing => normal', [
      animate('0.2s ease-in')
    ])
  ]),

  // Slide in from bottom for mobile
  trigger('slideInBottom', [
    state('in', style({ transform: 'translateY(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateY(100%)', opacity: 0 }),
      animate('0.5s cubic-bezier(0.25, 0.8, 0.25, 1)')
    ])
  ])
];

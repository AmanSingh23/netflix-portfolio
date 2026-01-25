import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeAnimations = [
  trigger('fadeIn', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [
      style({ opacity: 0 }),
      animate('0.5s ease-in-out')
    ]),
    transition('* => void', [
      animate('0.5s ease-in-out', style({ opacity: 0 }))
    ])
  ]),

  trigger('fadeInUp', [
    state('in', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      animate('0.6s ease-out')
    ]),
    transition('* => void', [
      animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(-30px)' }))
    ])
  ]),

  trigger('fadeInDown', [
    state('in', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', [
      style({ opacity: 0, transform: 'translateY(-30px)' }),
      animate('0.6s ease-out')
    ]),
    transition('* => void', [
      animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(30px)' }))
    ])
  ]),

  trigger('fadeInLeft', [
    state('in', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', [
      style({ opacity: 0, transform: 'translateX(-30px)' }),
      animate('0.6s ease-out')
    ]),
    transition('* => void', [
      animate('0.3s ease-in', style({ opacity: 0, transform: 'translateX(30px)' }))
    ])
  ]),

  trigger('fadeInRight', [
    state('in', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', [
      style({ opacity: 0, transform: 'translateX(30px)' }),
      animate('0.6s ease-out')
    ]),
    transition('* => void', [
      animate('0.3s ease-in', style({ opacity: 0, transform: 'translateX(-30px)' }))
    ])
  ]),

  trigger('fadeInScale', [
    state('in', style({ opacity: 1, transform: 'scale(1)' })),
    transition('void => *', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      animate('0.5s ease-out')
    ]),
    transition('* => void', [
      animate('0.3s ease-in', style({ opacity: 0, transform: 'scale(1.1)' }))
    ])
  ])
];

import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideAnimations = [
  trigger('slideIn', [
    state('in', style({ transform: 'translateX(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('0.5s ease-in-out')
    ]),
    transition('* => void', [
      animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ]),

  trigger('slideUp', [
    state('in', style({ transform: 'translateY(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateY(100%)', opacity: 0 }),
      animate('0.5s ease-in-out')
    ]),
    transition('* => void', [
      animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
    ])
  ]),

  trigger('slideDown', [
    state('in', style({ transform: 'translateY(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      animate('0.5s ease-in-out')
    ]),
    transition('* => void', [
      animate('0.5s ease-in-out', style({ transform: 'translateY(100%)', opacity: 0 }))
    ])
  ]),

  trigger('slideLeft', [
    state('in', style({ transform: 'translateX(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('0.5s ease-in-out')
    ]),
    transition('* => void', [
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ])
  ]),

  trigger('slideRight', [
    state('in', style({ transform: 'translateX(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('0.5s ease-in-out')
    ]),
    transition('* => void', [
      animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ])
];

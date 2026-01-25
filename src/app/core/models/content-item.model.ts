export interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  category: string;
  type: 'work' | 'personal' | 'project' | 'certification' | 'recommendation';
  rating?: number;
  duration?: string;
  year?: number;
  tags: string[];
  details?: ContentDetails;
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface ContentDetails {
  overview: string;
  skills?: string[];
  technologies?: string[];
  achievements?: string[];
  links?: ContentLink[];
  gallery?: string[];
  testimonials?: Testimonial[];
}

export interface ContentLink {
  type: 'github' | 'demo' | 'documentation' | 'video' | 'other';
  url: string;
  label: string;
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

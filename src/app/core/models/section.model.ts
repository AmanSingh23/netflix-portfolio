export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  type: 'featured' | 'horizontal' | 'grid' | 'hero';
  items: string[]; // Content item IDs
  isLazy?: boolean;
  showMore?: boolean;
  maxItems?: number;
}

export interface SectionConfig {
  sections: ContentSection[];
  featuredSection?: string;
  heroSection?: string;
}

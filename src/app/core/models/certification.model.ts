export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'security' | 'development' | 'both';
  issuedDate?: string;
  expiryDate?: string;
  logoUrl?: string;
  logoName?: string; // For vendor logos (AWS, Microsoft, etc.)
  tags: string[];
  verifyUrl?: string;
  isPursuing?: boolean;
  eta?: string;
  badges?: string[]; // Additional badges/icons
}

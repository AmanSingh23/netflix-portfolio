export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  technologies: string[];
  achievements: string[];
  startDate: string;
  endDate: string;
  isPresent: boolean;
  location?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  field?: string;
  achievements?: string[];
  startDate: string;
  endDate: string;
  isPresent: boolean;
  location?: string;
}


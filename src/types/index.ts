export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  color?: string;
}

export interface Experience {
  company: string;
  logo?: string;
  role: string;
  startDate: string;
  endDate: string | null;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  handle: string;
  avatarUrl: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  phone: string;
  instagram: string;
  facebook: string;
  location: string;
  languages: string[];
}

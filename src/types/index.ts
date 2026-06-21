import type { IconType } from "react-icons/lib";

// ========== Navigation ==========
export interface NavLink {
  label: string;
  href: string;
}

// ========== Projects ==========
export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  category: 'ai-ml' | 'fullstack' | 'frontend' | 'backend';
}

// ========== Skills ==========

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
  color: string;
}

// ========== Education ==========
export interface Education {
  id: number;
  institution: string;
  degree: string;
  specialization: string;
  duration: string;
  grade?: string;
  description: string;
}

// ========== Certificates ==========
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  image?: string;
  category: "Frontend Development" | "Backend Development" | "Programming" | "Innovation" | "Web Development" | "Course";
}

// ========== Social Links ==========
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

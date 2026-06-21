import avatarImage from '../assets/my-pic.png';
import type { NavLink, SocialLink } from '../types';
import resumeFile from './Aniket-resume.pdf';

export const personalInfo = {
  name: 'Aniket Singh',
  title: 'B.Tech Student | Full Stack Developer',
  tagline:
    'Building scalable and reliable web applications with modern backend and cloud technologies.',
  summary:
    "Computer Science student focused on full-stack development, backend engineering, and system design. Building scalable applications with MERN, AWS, and modern software development practices.",
  email: 'aniketsingh.lab@gmail.com',
  phone: '+91 86014 42061',
  location: 'Bhopal, Madhya Pradesh, India',
  resumeLink: resumeFile,
  avatarUrl: avatarImage,
  availability: 'Open to internships, freelance work, and Full time Job.',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/aniket-singh-04',
    icon: 'FaGithub',
    username: 'aniket-singh-04',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aniket-singh-9aa4b825b/',
    icon: 'FaLinkedin',
    username: 'Aniket Singh',
  },
  {
    platform: 'Email',
    url: 'mailto:aniketsingh.lab@gmail.com',
    icon: 'FaEnvelope',
    username: 'aniketsingh.lab@gmail.com',
  },
];

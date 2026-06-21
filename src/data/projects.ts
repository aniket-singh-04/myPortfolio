import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio',
    description:
      'A responsive portfolio built with React, TypeScript, and Tailwind CSS v4 to present my background , skills, education, and contact details in a clearer way.',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'React Icons'],
    githubLink: 'https://github.com/aniket-singh-04/myPortfolio',
    liveLink: 'https://aniket-kr-portfolio.netlify.app/',
    image: new URL("../assets/project1.png", import.meta.url).href,
    category: 'frontend',
  },
  {
    id: 2,
    title: 'Restaurant Food Ordering System',
    description:
      'QR-Based Restaurant Ordering System - A production-oriented MERN application that digitizes restaurant ordering through table QR codes, enabling seamless menu browsing, order placement, payment processing, and real-time order management.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'AWS Lambda', 'GitHub Actions', 'Razorpay', 'Nodemailer','Typescript', 'Redis', 'Git', 'GitHub', 'CI/CD'],
    githubLink: 'https://github.com/aniket-singh-04/myPortfolio',
    liveLink: 'https://mealtap.in',
    image: new URL("../assets/project2.png", import.meta.url).href,
    category: 'fullstack',
  },
];

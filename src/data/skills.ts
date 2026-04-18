import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React.js'},
      { name: 'TypeScript'},
      { name: 'Next.js'},
      { name: 'Tailwind CSS'},
      { name: 'HTML5 / CSS3'},
      { name: 'Framer Motion'},
      { name: 'Redux'},
      { name: 'Material UI'},
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Node.js'},
      { name: 'Express.js'},
      { name: 'Python (Flask/FastAPI)'},
      { name: 'MongoDB'},
      { name: 'Redis'},
      { name: 'REST API Design'},
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'Git / GitHub'},
      { name: 'AWS (EC2, S3, Lambda)'},
      { name: 'CI/CD (GitHub Actions)'},
      { name: 'Linux / Shell Scripting'},
      { name: 'VS Code / Vim'},
      { name: 'Postman / Insomnia'},
    ],
  },
];

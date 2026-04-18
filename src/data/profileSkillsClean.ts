import type { SkillCategory } from '../types';
import { FaCode } from "react-icons/fa";

export const profileSkillCategoriesClean: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'FE',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 / CSS3' },
      { name: 'Responsive UI Design' },
      { name: 'Vite' },
    ],
  },
  {
    title: 'Backend',
    icon: 'BE',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'MongoDB' },
      { name: 'Authentication Basics' },
      { name: 'Data Validation' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: 'OPS',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Postman' },
      { name: 'Debugging' },
      { name: 'Problem Solving' },
      { name: 'Deployment Basics' },
      { name: 'Team Collaboration' },
    ],
  },
  {
    title: "IDE / Editors",
    icon: FaCode , 
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "VS Code" },
      { name: "Cursor" },
      { name: "Antigravity" }
    ]
  }
];
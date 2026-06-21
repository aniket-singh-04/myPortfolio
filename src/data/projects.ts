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
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'AWS Lambda', 'GitHub Actions', 'Razorpay', 'Nodemailer', 'Typescript', 'Redis', 'Git', 'GitHub', 'CI/CD'],
    githubLink: 'https://github.com/aniket-singh-04/myPortfolio',
    liveLink: 'https://mealtap.in',
    image: new URL("../assets/project2.png", import.meta.url).href,
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Redis Leaderboard API',
    description:
      'Redis Leaderboard API is a backend service built with Redis that provides efficient leaderboard management using sorted sets. It allows users to add scores, update rankings, and retrieve top players in real time, making it suitable for gaming, competitions, or ranking-based applications.',
    techStack: ['Nodes', 'Redis', 'Express', 'Javascript'],
    githubLink: 'https://github.com/aniket-singh-04/Redis_Leaderboard_API',
    liveLink: '',
    category: 'backend',
  },
  {
    id: 4,
    title: 'Simple Todo App',
    description:
      'A simple and clean Todo List web application that helps users add, manage, and track daily tasks efficiently. It features an easy-to-use interface where tasks can be added and marked as completed, helping improve productivity and organization.',
    techStack: ['Html', 'CSS', 'Javascript'],
    githubLink: 'https://github.com/aniket-singh-04/Todo-Web-App',
    liveLink: 'https://simple-todos-web-app.netlify.app',
    image: new URL("../assets/project0.png", import.meta.url).href,
    category: 'frontend',
  },
  {
    id: 5,
    title: 'Password Manager',
    description:
      'A secure and simple password manager that helps users generate, store, and manage strong passwords safely. It ensures encrypted storage of sensitive credentials and provides an easy-to-use interface for quick access and organization of accounts.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication','Git', 'GitHub','Argon2'],
    githubLink: 'https://github.com/aniket-singh-04/Todo-Web-App',
    liveLink: 'https://secretmanagers.netlify.app',
    image: new URL("../assets/project5.png", import.meta.url).href,
    category: 'fullstack',
  },
];

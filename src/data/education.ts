import type { Education, Certificate, TimelineItem } from '../types';

export const education: Education[] = [
  {
    id: 1,
    institution: 'IES College of Technology, Bhopal',
    degree: "Bachelor of Technology (B.Tech) — 3rd Year",
    specialization: 'Computer Science / Engineering',
    duration: '2023 — Present',
    grade: 'Current CGPA: 7.5',
    description:
      "Pursuing B.Tech with coursework in Data Structures, Algorithms, Web Development, and Machine Learning. Actively building projects and contributing to open-source front-end work.",
  },
  {
    id: 2,
    institution: 'MG Inter College',
    degree: 'Higher Secondary (XII)',
    specialization: 'Science',
    duration: '2019 — 2021',
    grade: 'Percentage: 81.4%',
    description:
      'Completed higher secondary education with strong emphasis on mathematics and computer science.',
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'test',
    issuer: 'test',
    date: 'test',
    credentialId: 'test-78392',
    link: 'example-tf',
    category: 'AI/ML',
  },
];

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: '2019',
    title: 'Started B.Tech Journey',
    description:
      'Began my Computer Science degree at NIT Warangal. Fell in love with programming through C++ and data structures.',
    icon: '🎓',
  },
  {
    id: 2,
    year: '2020',
    title: 'Discovered Web Development',
    description:
      'Built my first full-stack project using the MERN stack. Started contributing to open-source projects on GitHub.',
    icon: '💻',
  },
  {
    id: 3,
    year: '2021',
    title: 'Deep Dive into AI/ML',
    description:
      'Completed Andrew Ng\'s Deep Learning Specialization. Built my first CNN-based image classifier achieving 94% accuracy.',
    icon: '🧠',
  },
  {
    id: 4,
    year: '2022',
    title: 'First Internship & Hackathon Wins',
    description:
      'Interned at a leading tech startup. Won 2 national-level hackathons with AI-powered solutions. Published first research paper.',
    icon: '🏆',
  },
  {
    id: 5,
    year: '2023',
    title: 'M.Tech at IIT Bangalore',
    description:
      'Joined IIT Bangalore for M.Tech in AI/ML. Secured Google TensorFlow Developer certification. Started freelancing.',
    icon: '🚀',
  },
  {
    id: 6,
    year: '2024',
    title: 'Building Production Systems',
    description:
      'Shipped 3 production-grade applications. Contributed to LangChain ecosystem. Growing my developer community.',
    icon: '⚡',
  },
];

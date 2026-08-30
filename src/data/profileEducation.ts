import type { Certificate, Education } from '../types';

export const profileEducation: Education[] = [
  {
    id: 1,
    institution: 'IES College of Technology, Bhopal',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science and Engineering',
    duration: '2023 - Present',
    grade: 'Current CGPA: 7.96',
    description:
      'Pursuing a computer science degree with a strong interest in web development, programming fundamentals, and building practical portfolio projects.',
  },
  {
    id: 2,
    institution: 'MG Inter College',
    degree: 'Higher Secondary (XII)',
    specialization: 'Science',
    duration: '2021 - 2023',
    grade: 'Percentage: 81.4%',
    description:
      'Completed higher secondary education with a focus on mathematics, science, and foundational computer studies.',
  },
];

export const profileCertificates: Certificate[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "3 Dec 2024",
    credentialId: "fccba479234-1524-468c-af74-56bcd3922d3d",
    link: "https://www.freecodecamp.org/certification/fccba479234-1524-468c-af74-56bcd3922d3d/responsive-web-design",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Introduction to Operating Systems",
    issuer: "NPTEL , Indian Institute of Technology Madras",
    date: "27 Sep 2025",
    credentialId: "NPTEL25CS94S43270075009207445",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs94/Course/NPTEL25CS94S43270075009207445.pdf",
    category: "Course",
  },
  {
    id: 3,
    title: "DSA Hackthon",
    issuer: "IES University",
    date: "4 Jan 2026",
    credentialId: "IES S.No - 36",
    link: "https://drive.google.com/file/d/1NUJjK0PW67JdqNDw11pfsBVyo1SWFoV7/view?usp=drive_link",
    category: "Programming",
  },
  {
    id: 4,
    title: "TECHNOVISION",
    issuer: "MADHYANCHAL PROFESSIONAL UNIVERSITY",
    date: "8 May 2026",
    credentialId: "MPU : SE-25",
    link: "https://drive.google.com/file/d/1rYWYrXa1NbiKE6DR1LeaI4nAs0bVyy2v/view?usp=drive_link",
    category: "Innovation",
  },
  {
    id: 5,
    title: "Ideathon",
    issuer: "DSPL Technologies & Execution Partner CodeTexa",
    date: "21 May 2026",
    credentialId: " ",
    link: "https://drive.google.com/file/d/1Adu9SL40vE53bkhizZoq5Kk2HbplDJVd/view?usp=drive_link",
    category: "Innovation",
  },
  {
    id: 6,
    title: "Ideathon",
    issuer: "Prestige Institute of Management and Research, Bhopal",
    date: "21 May 2026",
    credentialId: " ",
    link: "https://drive.google.com/file/d/1JZz5Az0kiZJacrW8diPydnpyouqjKgVP/view?usp=drive_link",
    category: "Innovation",
  },
];

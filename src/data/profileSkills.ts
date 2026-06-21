import type { SkillCategory } from "../types";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiGithubactions ,
  SiPm2,
  SiMongodb,
  SiRedis,
  SiGithub,
  SiPostman,
  SiNginx,
} from "react-icons/si";

import { FaCode, FaAws, FaJava, FaDatabase, FaServer, FaDev, FaTools  } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export const profileSkillCategoriesClean: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "from-slate-500 to-slate-400",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava  },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },

  {
    title: "Frontend Engineering",
    icon: SiReact,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Responsive UI Design", icon: SiReact },
      { name: "Component-Based Architecture", icon: SiReact },
      { name: "State Management", icon: SiReact },
    ],
  },

  {
    title: "Backend Engineering",
    icon: FaServer ,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API Design", icon: SiNodedotjs },
      { name: "Authentication & Authorization", icon: SiNodedotjs },
      { name: "Security Best Practices", icon: SiNodedotjs },
    ],
  },

  {
    title: "Databases & Caching",
    icon: FaDatabase ,
    color: "from-purple-500 to-indigo-400",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      // { name: "Mongoose ODM", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      // { name: "Data Modeling", icon: SiMongodb },
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: FaDev,
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "AWS (S3, EC2, CloudFront)", icon: FaAws },
      { name: "Nginx", icon: SiNginx },
      { name: "CI/CD Pipelines", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "PM2 Process Manager", icon: SiPm2 },
    ],
  },

  {
    title: "Tools & Integrations",
    icon: FaTools,
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "Git & GitHub", icon: SiGithub },
      { name: "Postman API Testing", icon: SiPostman },
      { name: "Razorpay Integration", icon: MdPayment  },
      { name: "Debugging & Problem Solving", icon: SiPostman },
    ],
  },

  {
    title: "Developer Tools",
    icon: FaCode,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "VS Code", icon: FaCode },
      { name: "Cursor IDE", icon: FaCode },
      { name: "AI-Assisted Development", icon: FaCode },
    ],
  },
];
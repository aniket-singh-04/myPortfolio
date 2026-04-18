import { FaCode, FaServer, FaBrain } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  const highlights = [
    {
      icon: <FaCode className="text-3xl text-primary-500" />,
      title: 'Frontend Mastery',
      description: 'Crafting responsive, responsive interfaces with React, TypeScript, and modern CSS.',
    },
    {
      icon: <FaServer className="text-3xl text-accent-500" />,
      title: 'Backend Engineering',
      description: 'Developing scalable APIs and microservices using Node.js, Express, and databases.',
    },
    {
      icon: <FaBrain className="text-3xl text-purple-500" />,
      title: 'AI/ML Solutions',
      description: 'Building and deploying machine learning models to solve complex real-world problems.',
    },
  ];

  return (
    <section id="about" className="section-container relative">
      <SectionHeading title="About Me" subtitle="Discover my journey" />

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left - Image/Visuals */}
        <div
          className="relative group"
        >
          <div className="relative z-10 w-full aspect-square md:aspect-4/3 lg:aspect-square max-w-md mx-auto overflow-hidden rounded-3xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
            <div className="absolute inset-0 bg-surface-200 dark:bg-surface-800 flex items-center justify-center">
              <div className="text-8xl p-8 rounded-2xl glow text-primary-500 bg-white dark:bg-surface-900 shadow-2xl">
                👨‍💻
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl">The Developer</h3>
                <p className="text-white/80 text-sm">Always building, always learning.</p>
              </div>
            </div>
          </div>

          {/* Decorative background blocks */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-primary-500/14 rounded-3xl -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-300"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent-500/14 rounded-3xl -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-300"></div>
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-surface-900 dark:text-white mb-4 leading-tight">
            Bridging the gap between <span className="text-primary-500">AI</span> and <span className="text-accent-500">Web</span>
          </h3>

          <div className="space-y-4 text-surface-600 dark:text-surface-400 mb-8 leading-relaxed text-base">
            <p>
              I am a passionate Full Stack Developer with a strong specialization in Artificial Intelligence and Machine Learning. My journey started with a fascination for making computers solve complex problems, which naturally led me to the dynamic world of web development and AI.
            </p>
            <p>
              Currently, I focus on building robust, scalable applications that leverage cutting-edge ML models to deliver intelligent user experiences. I believe that the best products are built at the intersection of beautiful design, seamless user experience, and powerful algorithms.
            </p>
            <p>
              When I'm not writing code or training models, you can find me reading about the latest tech trends, contributing to open-source projects, or exploring new coffee shops.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-surface-50 dark:bg-surface-800/50 p-5 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm hover:border-primary-400/50 transition-colors">
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-surface-900 dark:text-white text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-surface-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

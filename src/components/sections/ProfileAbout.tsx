import { FaBrain, FaCode, FaServer } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';

export default function ProfileAbout() {
  const highlights = [
    {
      icon: <FaCode className="text-3xl text-primary-500" />,
      title: 'Frontend Focus',
      description: 'Building responsive interfaces with React, TypeScript, and clean component structure.',
    },
    {
      icon: <FaServer className="text-3xl text-accent-500" />,
      title: 'Backend Practice',
      description: 'Learning how to structure APIs, validation, and data flow using Node.js and Express.',
    },
    {
      icon: <FaBrain className="text-3xl text-primary-400" />,
      title: 'Continuous Learning',
      description: 'Improving through projects, iteration, and studying the fundamentals behind better software.',
    },
  ];

  return (
    <section id="about" className="section-container relative">
      <SectionHeading title="About Me" subtitle="Discover my journey" />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="group relative">
          <div className="relative z-10 mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-surface-200 bg-surface-50 dark:border-surface-700 dark:bg-surface-900 md:aspect-4/3 lg:aspect-square">
            <img
              src={personalInfo.avatarUrl}
              alt={`${personalInfo.name} portrait`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-6">
              <div>
                <h3 className="text-xl font-bold text-white">{personalInfo.title}</h3>
                <p className="text-sm text-white/80">{personalInfo.availability}</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 -z-10 h-full w-full rounded-3xl bg-primary-500/14 transition-all duration-300 group-hover:-left-4 group-hover:-top-4" />
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-accent-500/14 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-4 font-display text-2xl font-bold leading-tight text-surface-900 dark:text-white md:text-3xl">
            Growing through <span className="text-primary-500">real projects</span> and{' '}
            <span className="text-accent-500">practical learning</span>
          </h3>

          <div className="mb-8 space-y-4 text-base leading-relaxed text-surface-600 dark:text-surface-400">
            <p>
              I enjoy building interfaces that feel polished, readable, and dependable. Most of my
              learning comes from taking ideas from rough drafts to working screens and improving
              them one detail at a time.
            </p>
            <p>
              Right now, I am focused on strengthening my frontend skills while continuing to learn
              more about backend fundamentals, data handling, and writing code that is easier to
              maintain.
            </p>
            <p>
              I care about steady progress, clean implementation, and building a portfolio that
              reflects both technical growth and thoughtful presentation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-surface-200 bg-surface-50 p-5 shadow-sm transition-colors hover:border-primary-400/50 dark:border-surface-700 dark:bg-surface-800/50"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="mb-1 text-sm font-bold text-surface-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-surface-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

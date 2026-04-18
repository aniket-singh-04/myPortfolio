import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import { profileProjects } from '../../data/profileProjects';
import type { Project } from '../../types';
import SectionHeading from '../ui/SectionHeading';

type Category = 'all' | 'ai-ml' | 'fullstack' | 'frontend' | 'backend';

const categoryLabels: Record<Project['category'], string> = {
  'ai-ml': 'AI & ML',
  fullstack: 'Full Stack',
  frontend: 'Frontend',
  backend: 'Backend',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const uniqueCategories = Array.from(new Set(profileProjects.map((project) => project.category)));
  const categories: { label: string; value: Category }[] = [
    { label: 'All Projects', value: 'all' },
    ...uniqueCategories.map((category) => ({
      label: categoryLabels[category],
      value: category,
    })),
  ];

  const filteredProjects = profileProjects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-container">
      <SectionHeading title="Featured Work" subtitle="What I've built" />

      {/* Category Filter */}
      {uniqueCategories.length > 1 && (
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'border-primary-500 bg-primary-500 text-white shadow-md shadow-primary-500/20'
                  : 'border-surface-200 bg-surface-50 text-surface-600 hover:border-primary-400 hover:text-primary-500 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.title}
              className="group flex flex-col h-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-surface-200 dark:bg-surface-700 border-b border-surface-200 dark:border-surface-700 flex items-center justify-center" role="img" aria-label={`${project.title} preview`}>
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%,transparent_100%)] [background-size:20px_20px]"></div>
                
                <FaFolder className="text-6xl text-surface-400 dark:text-surface-600 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-500/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-surface-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      title="View Source Code"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      title="View Live Demo"
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-display text-surface-900 dark:text-white group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                </div>
                
                <p className="text-surface-600 dark:text-surface-400 text-sm mb-6 grow leading-relaxed">
                  {project.description}
                </p>

                {!project.githubLink && !project.liveLink && (
                  <p className="mb-4 text-xs font-medium uppercase tracking-wider text-surface-400">
                    Case study available in this portfolio.
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-100 dark:bg-surface-700 text-surface-500 dark:text-surface-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import { projects } from '../../data/projects';
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
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const uniqueCategories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  const categories: { label: string; value: Category }[] = [
    { label: "All Projects", value: "all" },
    ...uniqueCategories.map((category) => ({
      label: categoryLabels[category],
      value: category,
    })),
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-container">
      <SectionHeading
        title="Featured Work"
        subtitle="What I've built"
      />

      {uniqueCategories.length > 1 && (
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "border-primary-500 bg-primary-500 text-white"
                  : "border-surface-200 bg-surface-50 text-surface-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredProjects.map((project) => {
          console.log(project)

          return (
            <div
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-surface-700 dark:bg-surface-800"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-surface-200 bg-surface-200 dark:border-surface-700 dark:bg-surface-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                ) : (
                  <FaFolder className="text-6xl text-surface-400 dark:text-surface-600" />
                )}

                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary-500/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-surface-900 shadow-lg transition-transform hover:scale-110"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform hover:scale-110"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex grow flex-col p-6">
                <h3 className="mb-4 text-xl font-bold text-surface-900 transition-colors group-hover:text-primary-500 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-6 grow text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-100 px-2.5 py-1 text-xs font-medium text-surface-600 dark:bg-surface-700 dark:text-surface-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import type { MouseEvent } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/personal';
import Button from '../ui/Button';

const githubLink = socialLinks.find((link) => link.platform === 'GitHub')?.url ?? '#';
const linkedinLink = socialLinks.find((link) => link.platform === 'LinkedIn')?.url ?? '#';

export default function ProfileHero() {
  const scrollToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-12 pt-4 text-left"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-[20%] h-[37.5rem] w-[37.5rem] rounded-full bg-primary-500/20 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-32 -left-[10%] h-[31.25rem] w-[31.25rem] rounded-full bg-accent-500/20 blur-[100px] mix-blend-screen" />
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-grid opacity-50" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="glow mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-500" />
            </span>
            {personalInfo.availability}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-surface-500 dark:text-surface-400">
            {personalInfo.title}
          </p>

          <h1 className="mb-4 font-display text-3xl font-bold leading-tight tracking-tight text-surface-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm <br className="hidden lg:block" />
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="mb-4 max-w-2xl text-lg text-surface-600 dark:text-surface-400">
            {personalInfo.tagline}
          </p>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-surface-600 dark:text-surface-400 md:text-lg">
            {personalInfo.summary}
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button href="#projects" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button href={personalInfo.resumeLink} variant="secondary" download>
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-4 text-surface-500 dark:text-surface-400">
            <span className="text-sm font-medium uppercase tracking-wider">Connect with me</span>
            <div className="h-px w-12 bg-surface-300 dark:bg-surface-700" />
            <div className="flex gap-3">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-2 transition-colors hover:text-primary-500">
                <FaGithub className="text-xl" />
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="p-2 transition-colors hover:text-primary-500">
                <FaLinkedin className="text-xl" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 transition-colors hover:text-primary-500">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex items-center justify-center lg:mt-0">

          <div className="relative h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-[28rem] lg:w-[28rem]">

            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30" />

            {/* Glow */}
            <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 blur-xl" />

            {/* Avatar */}
            <div className="absolute inset-6 sm:inset-8 overflow-hidden rounded-full 
              border-4 sm:border-6 border-white/90 dark:border-surface-900
              bg-surface-100 dark:bg-surface-800 shadow-xl">
              <img
                src={personalInfo.avatarUrl}
                alt={`${personalInfo.name} portrait`}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* 👇 Hide floating cards on small screens */}

            {/* Frontend Card */}
            <div className="hidden md:flex glass absolute -left-6 top-10 items-center gap-3 rounded-xl p-3 shadow-lg">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-500">
                UI
              </div>
              <div>
                <div className="text-xs font-semibold text-surface-900 dark:text-white">Frontend</div>
                <div className="text-[10px] text-surface-500">React</div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="hidden md:flex glass absolute -right-6 bottom-12 items-center gap-3 rounded-xl p-3 shadow-lg">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-500">
                API
              </div>
              <div>
                <div className="text-xs font-semibold text-surface-900 dark:text-white">Backend</div>
                <div className="text-[10px] text-surface-500">Node</div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}

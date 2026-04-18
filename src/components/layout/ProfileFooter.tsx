import type { ReactNode } from 'react';
import { FaArrowUp, FaEnvelope, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/personal';

const iconMap: Record<string, ReactNode> = {
  FaGithub: <FaGithub />,
  FaLinkedin: <FaLinkedin />,
  FaEnvelope: <FaEnvelope />,
};

export default function ProfileFooter() {
  return (
    <footer className="relative border-t border-surface-200 dark:border-surface-800">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary-500 to-accent-500 font-display text-sm font-bold text-white">
                AS
              </div>
              <span className="font-display text-lg font-bold text-surface-900 dark:text-white">
                {personalInfo.name.split(' ')[0]}
                <span className="text-primary-500">.</span>dev
              </span>
            </div>
            <p className="max-w-xs text-sm text-surface-500 dark:text-surface-400">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 bg-surface-100 text-surface-500 shadow-sm transition-all duration-200 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:border-surface-700 dark:bg-surface-800 dark:text-surface-400 dark:hover:border-primary-500 dark:hover:bg-primary-500 dark:hover:text-white"
                title={link.platform}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 rounded-xl border border-surface-200 bg-surface-100 px-4 py-2 text-sm font-medium text-surface-600 shadow-sm transition-all duration-200 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:border-surface-700 dark:bg-surface-800 dark:text-surface-400 dark:hover:border-primary-500 dark:hover:bg-primary-500 dark:hover:text-white"
          >
            <FaArrowUp className="text-xs" />
            Back to top
          </button>
        </div>

        <div className="mt-10 border-t border-surface-200 pt-6 text-center dark:border-surface-800">
          <p className="flex items-center justify-center gap-1 text-sm text-surface-500 dark:text-surface-400">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <FaHeart className="text-xs text-red-500" />
            using React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}

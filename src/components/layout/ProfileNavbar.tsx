import { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { navLinks, personalInfo } from '../../data/personal';
import { useActiveSection } from '../../hooks/useActiveSection';

interface ProfileNavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export default function ProfileNavbar({ isDark, toggleDark }: ProfileNavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b border-surface-200 bg-white/70 px-4 backdrop-blur-md dark:border-surface-800 dark:bg-surface-900/70 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 font-display text-lg font-bold text-white">
            AS
          </div>
          <span className="hidden font-display text-lg font-bold text-surface-900 dark:text-white sm:block">
            {personalInfo.name.split(' ')[0]}
            <span className="text-primary-500">.</span>dev
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-linear-to-r from-primary-500 to-accent-500" />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-100 transition hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700"
          >
            {isDark ? <FaSun className="text-amber-400" /> : <FaMoon className="text-primary-500" />}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-100 transition hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700 lg:hidden"
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className="h-16" />

      {isMobileOpen && (
        <>
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          <div className="fixed right-0 top-0 z-50 h-full w-72 border-l border-surface-200/50 bg-white/85 p-4 shadow-2xl backdrop-blur-xl dark:border-surface-700/50 dark:bg-surface-900/85">
            <div className="mt-16 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`group relative rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                        : 'text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-800'
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full transition-all duration-300 ${
                        isActive ? 'bg-primary-500' : 'bg-transparent group-hover:bg-surface-300'
                      }`}
                    />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-sm text-surface-400">
              © {new Date().getFullYear()} {personalInfo.name}
            </div>
          </div>
        </>
      )}
    </>
  );
}

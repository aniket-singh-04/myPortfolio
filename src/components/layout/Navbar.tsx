import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { navLinks } from "../../data/personal";
import { useActiveSection } from "../../hooks/useActiveSection";

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <div
        className="fixed top-0 left-0 z-50 w-full h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-white/70 dark:bg-surface-900/70 backdrop-blur-md border-b border-surface-200 dark:border-surface-800"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg font-display bg-primary-500 text-white">
            AS
          </div>
          <span className="text-lg font-bold font-display hidden sm:block">
            Aniket<span className="text-primary-500">.</span>dev
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? "text-primary-600 dark:text-primary-400" : "text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white" }`}
              >
                {link.label}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-linear-to-r from-primary-500 to-accent-500 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode */}
          <button
            onClick={toggleDark}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition"
          >
            {isDark ? (
              <FaSun className="text-amber-400" />
            ) : (
              <FaMoon className="text-primary-500" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition"
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Spacer (IMPORTANT) */}
      <div className="h-16" />

      {/* Mobile Menu */}
      {isMobileOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-72 z-50 p-4 transform transition-transform duration-300 ease-in-out ${isMobileOpen ? "translate-x-0" : "translate-x-full"} bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl border-l border-surface-200/50 dark:border-surface-700/50 shadow-2xl`}
          >

            {/* Links */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                      setIsMobileOpen(false);
                    }}
                    className={`group relative px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive ? "bg-primary-500/10 text-primary-600 dark:text-primary-400" : "text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800"}`}
                  >
                    {/* Active Indicator */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full transition-all duration-300 ${isActive ? "bg-primary-500" : "bg-transparent group-hover:bg-surface-300"}`}
                    />

                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 right-6 text-sm text-surface-400">
              © 2026 Aniket.dev
            </div>
          </div>
        </>
      )}
    </>
  );
}

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiKaggle } from 'react-icons/si';
import { socialLinks, personalInfo } from '../../data/personal';

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub />,
  FaLinkedin: <FaLinkedin />,
  FaTwitter: <FaTwitter />,
  FaEnvelope: <FaEnvelope />,
  SiLeetcode: <SiLeetcode />,
  SiKaggle: <SiKaggle />,
};

export default function Footer() {

  return (
    <footer className="relative border-t border-surface-200 dark:border-surface-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-primary-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm font-display">
                AS
              </div>
              <span className="text-lg font-bold font-display text-surface-900 dark:text-white">
                Aniket<span className="text-primary-500">.</span>dev
              </span>
            </div>
            <p className="text-sm text-surface-500 dark:text-surface-400 max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.slice(0, 4).map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center
                  bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700
                  text-surface-500 dark:text-surface-400 shadow-sm
                  hover:bg-primary-500 hover:text-white hover:border-primary-500
                  dark:hover:bg-primary-500 dark:hover:text-white dark:hover:border-primary-500
                  transition-all duration-200"
                title={link.platform}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          {/* Right - Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer
              bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700
              text-surface-600 dark:text-surface-400 shadow-sm
              hover:bg-primary-500 hover:text-white hover:border-primary-500
              dark:hover:bg-primary-500 dark:hover:text-white dark:hover:border-primary-500
              transition-all duration-200 text-sm font-medium"
          >
            <FaArrowUp className="text-xs" />
            Back to top
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-surface-200 dark:border-surface-800 text-center">
          <p className="text-sm text-surface-500 dark:text-surface-400 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <FaHeart className="text-red-500 text-xs" />
            using React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}

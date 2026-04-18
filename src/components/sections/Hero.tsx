import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/personal';

export default function Hero() {
  const githubLink = socialLinks.find((l) => l.platform === 'GitHub')?.url || '#';
  const linkedinLink = socialLinks.find((l) => l.platform === 'LinkedIn')?.url || '#';

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden text-center md:text-left">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-[20%] w-150 h-150 rounded-full bg-primary-500/20 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-32 -left-[10%] w-125 h-125 rounded-full bg-accent-500/20 blur-[100px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 glow"
            >
              <span className="relative flex h-3 w-3 p-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500"></span>
              </span>
              Available for new opportunities
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-surface-900 dark:text-white mb-4 leading-tight"
            >
              Hi, I'm <br className="hidden lg:block" />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>



            <p
              className="text-surface-600 dark:text-surface-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
            >
              {personalInfo.summary}
            </p>

            <div
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
            >
              <button className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium shadow-lg hover:shadow-primary-500/25 transition-all active:scale-95 focus:ring-2 focus:ring-primary-500 focus:outline-none">
                View My Work
              </button>
              <button className="px-6 py-3 rounded-xl bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-900 dark:text-white font-medium border border-surface-200 dark:border-surface-700 shadow-sm transition-all active:scale-95 focus:ring-2 focus:ring-surface-500 focus:outline-none">
                Download CV
              </button>
            </div>

            <div
              className="flex items-center gap-4 text-surface-500 dark:text-surface-400"
            >
              <span className="text-sm font-medium uppercase tracking-wider">Connect with me</span>
              <div className="h-px w-12 bg-surface-300 dark:bg-surface-700"></div>
              <div className="flex gap-3">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors p-2">
                  <FaGithub className="text-xl" />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors p-2">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image/Avatar */}
          <div
            className="relative lg:h-full flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-112.5 lg:h-112.5">
              {/* Outer circle animation */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30"
              ></div>

              {/* Inner circle glowing */}
              <div className="absolute inset-4 rounded-full bg-linear-to-br from-primary-500 to-accent-500 opacity-20 blur-2xl animate-pulse-glow"></div>

              {/* The "Avatar" placeholder - Using a stylized graphic since we don't have a real image */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-surface-100 dark:bg-surface-800 border-8 border-white/90 dark:border-surface-900 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl md:text-8xl lg:text-9xl font-black gradient-text opacity-50">
                    &lt;/&gt;
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute top-12 -left-4 md:-left-8 glass dark:glass p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xl">
                  ⚛️
                </div>
                <div>
                  <div className="text-sm font-bold text-surface-900 dark:text-white">React</div>
                  <div className="text-xs text-surface-500">Expert</div>
                </div>
              </div>

              <div
                className="absolute bottom-16 -right-4 md:-right-8 glass dark:glass p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xl">
                  🧠
                </div>
                <div>
                  <div className="text-sm font-bold text-surface-900 dark:text-white">AI/ML</div>
                  <div className="text-xs text-surface-500">Python</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

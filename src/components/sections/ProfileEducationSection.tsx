import { FaGraduationCap } from 'react-icons/fa';
import { profileEducation } from '../../data/profileEducation';
import SectionHeading from '../ui/SectionHeading';

export default function ProfileEducationSection() {
  return (
    <section id="education" className="section-container">
      <SectionHeading title="Educational Journey" subtitle="Academic background" />

      <div className="relative mx-auto mt-12 max-w-4xl">
        <div className="absolute bottom-6 left-4 top-6 w-0.5 bg-linear-to-b from-primary-500/40 via-accent-500/40 to-primary-500/8 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {profileEducation.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col items-start md:flex-row md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-primary-500 bg-white shadow-[0_0_18px_rgba(99,102,241,0.45)] dark:bg-surface-900 md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-primary-500" />
                </div>

                <div
                  className={`w-full pl-12 pr-4 md:w-1/2 md:px-8 ${
                    isEven ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'
                  }`}
                >
                  <span className="mb-4 inline-block rounded-md bg-surface-100 px-3 py-1 text-sm font-semibold text-primary-600 dark:bg-surface-800 dark:text-primary-400">
                    {item.duration}
                  </span>

                  <h3 className="mb-1 font-display text-xl font-bold leading-tight text-surface-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <div className="mb-3 flex flex-wrap items-center gap-2 text-sm font-medium text-surface-600 dark:text-surface-300">
                    <FaGraduationCap className="text-surface-400" />
                    <span>{item.institution}</span>
                    <span className="text-surface-400">-</span>
                    <span>{item.specialization}</span>
                  </div>

                  {item.grade && (
                    <div className="mb-4 inline-block rounded border border-accent-500/20 bg-accent-500/10 px-2 py-1 font-mono text-xs font-bold text-accent-600 dark:text-accent-400">
                      {item.grade}
                    </div>
                  )}

                  <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-400 md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { FaGraduationCap } from 'react-icons/fa';
import { profileEducation } from '../../data/profileEducation';
import SectionHeading from '../ui/SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading title="Educational Journey" subtitle="Academic background" />

      <div className="max-w-4xl mx-auto mt-12 relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-[50%] top-6 bottom-6 w-0.5 bg-linear-to-b from-primary-500/40 via-accent-500/40 to-primary-500/8 md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {profileEducation.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-primary-500 bg-white shadow-[0_0_18px_rgba(99,102,241,0.45)] dark:bg-surface-900 md:left-1/2 md:-translate-x-1/2">
                   <div className="w-3 h-3 rounded-full bg-primary-500" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 pr-4 md:px-8 ${isEven ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'}`}>
                     <span className="inline-block px-3 py-1 rounded-md bg-surface-100 dark:bg-surface-800 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                       {item.duration}
                     </span>
                     
                     <h3 className="text-xl font-bold font-display text-surface-900 dark:text-white mb-1 leading-tight">
                       {item.degree}
                     </h3>
                     
                     <div className="text-surface-600 dark:text-surface-300 font-medium text-sm mb-3 flex flex-wrap gap-2 items-center">
                        <FaGraduationCap className="text-surface-400" />
                        <span>{item.institution}</span>
                        <span className="text-surface-400">•</span>
                        <span>{item.specialization}</span>
                     </div>
                     
                     {item.grade && (
                       <div className="mb-4 inline-block rounded border border-accent-500/20 bg-accent-500/10 px-2 py-1 font-mono text-xs font-bold text-accent-600 dark:text-accent-400">
                          {item.grade}
                       </div>
                     )}

                     <p className="text-surface-600 dark:text-surface-400 text-sm md:text-base leading-relaxed">
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

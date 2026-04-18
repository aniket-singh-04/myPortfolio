import { profileSkillCategoriesClean } from '../../data/profileSkillsClean';
import SectionHeading from '../ui/SectionHeading';

export default function Skills() {
return (
  <section
    id="skills"
    className="relative py-20 px-4 bg-white dark:bg-surface-900 border-y border-surface-200 dark:border-surface-800"
  >
    <SectionHeading
      title="Skills & Tools"
      subtitle="Technologies I use to design and build scalable applications"
    />

    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mt-12">
      {profileSkillCategoriesClean.map((category) => (
        <div
          key={category.title}
          className="group relative rounded-b-2xl overflow-hidden
          border border-surface-200 dark:border-surface-700
          bg-surface-50 dark:bg-surface-800/60
          hover:-translate-y-1 hover:shadow-xl
          transition-all duration-300"
        >
          
          {/* 🔥 Top Header Strip (Category Identity) */}
          <div className={`h-1 w-full bg-gradient-to-r ${category.color}`} />

          {/* Header */}
          <div className="flex items-center gap-4 px-6 pt-5 pb-4">
            <div
              className={`w-11 h-11 rounded-lg flex items-center justify-center text-xl
              bg-gradient-to-br ${category.color} text-white shadow-md`}
            >
              {typeof category.icon === 'string' ? category.icon : <category.icon />}
            </div>

            <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
              {category.title}
            </h3>
          </div>

          {/* Divider */}
          <div className="border-t border-surface-200 dark:border-surface-700" />

          {/* Skills */}
          <div className="p-6 pt-4 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 text-sm rounded-md
                bg-white dark:bg-surface-700
                border border-surface-200 dark:border-surface-600
                text-surface-700 dark:text-surface-300
                
                hover:border-primary-400 hover:text-primary-600
                dark:hover:text-primary-400
                transition-all duration-200"
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none
            bg-gradient-to-br from-transparent via-transparent to-primary-500/5" />
        </div>
      ))}
    </div>
  </section>
);
}

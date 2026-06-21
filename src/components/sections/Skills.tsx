import { profileSkillCategoriesClean } from '../../data/profileSkills';
import SectionHeading from '../ui/SectionHeading';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative section-container"
    >
      <SectionHeading
        title="Skills & Tools"
        subtitle="Technologies I work with"
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-14">
        {profileSkillCategoriesClean.map((category) => {
          const Icon = category.icon;

          return <div
            key={category.title}
            className="
              group relative rounded-2xl border
              border-surface-200/70 dark:border-surface-800
              bg-white/60 dark:bg-surface-900/40
              backdrop-blur-xl
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            {/* top gradient line */}
            <div
              className={`h-1 w-full bg-linear-to-r ${category.color}`}
            />

            {/* header */}
            <div className="flex items-center gap-3 px-6 pt-5">
              <div
                className={`w-10 h-10 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center text-white`}
              >
                {Icon ? (
                  <Icon className="text-lg" />
                ) : (
                  category.title.slice(0, 2)
                )}
              </div>

              <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* skills */}
            <div className="p-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-2
                      px-3 py-2 rounded-lg
                      border border-surface-200/70 dark:border-surface-700
                      bg-white dark:bg-surface-800
                      text-sm
                      transition-all duration-200
                      hover:scale-[1.05]
                      hover:border-primary-400
                      hover:shadow-md
                    "
                  >
                    {Icon && (
                      <Icon className="text-base text-primary-500" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* hover glow */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-500 pointer-events-none
                bg-linear-to-br from-transparent via-transparent to-primary-500/5
              "
            />
          </div>
        })}
      </div>
    </section>
  );
}

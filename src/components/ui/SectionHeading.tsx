
interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span
        className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
          bg-primary-500/10 text-primary-400 border border-primary-500/20"
      >
        {subtitle}
      </span>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-display
          text-surface-900 dark:text-white leading-tight"
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-linear-to-r from-primary-500 to-accent-500
          ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}

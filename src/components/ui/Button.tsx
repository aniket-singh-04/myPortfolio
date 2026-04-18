import { FaDownload } from 'react-icons/fa';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  icon?: ReactNode;
  download?: boolean;
}

export default function Button({
  href = '#',
  variant = 'primary',
  children,
  icon,
  download,
  className,
  rel,
  target,
  ...rest
}: ButtonProps) {
  const base = 'inline-flex items-center gap-3 font-medium rounded-lg transition-colors duration-200';
  const variants: Record<string, string> = {
    primary: 'px-5 py-2 bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'px-4 py-2 bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white hover:opacity-95 border border-surface-200 dark:border-surface-700',
    ghost: 'px-3 py-2 text-surface-700 dark:text-surface-300 hover:text-primary-500',
  };

  return (
    <a
      href={href}
      {...rest}
      download={download}
      target={target}
      rel={rel ?? (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
      className={`${base} ${variants[variant]} ${className ?? ''} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/30`.trim()}
    >
      {icon ?? (download ? <FaDownload /> : null)}
      <span>{children}</span>
    </a>
  );
}

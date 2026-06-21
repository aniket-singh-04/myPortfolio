import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ProfileScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-60 h-1">
      <div
        className="h-full origin-left rounded-r-full bg-linear-to-r from-primary-500 via-primary-400 to-accent-500"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}

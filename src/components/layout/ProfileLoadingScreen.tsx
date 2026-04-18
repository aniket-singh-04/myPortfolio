interface ProfileLoadingScreenProps {
  isLoading: boolean;
}

export default function ProfileLoadingScreen({ isLoading }: ProfileLoadingScreenProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-950">
      <div className="relative mb-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-accent-500 shadow-2xl shadow-primary-500/30">
          <span className="font-display text-3xl font-bold text-white">AS</span>
        </div>

        <div className="absolute -inset-3">
          <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary-400" />
        </div>

        <div className="absolute -inset-5">
          <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-accent-400" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="mb-2 font-display text-xl font-semibold text-white">
          Aniket<span className="text-primary-400">.dev</span>
        </h2>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <div key={dot} className="h-2 w-2 rounded-full bg-primary-400" />
          ))}
        </div>
      </div>
    </div>
  );
}


interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <div>
      {isLoading && (
        <div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center
            bg-surface-950"
        >
          {/* Animated Logo */}
          <div
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-primary-500/30">
              <span className="text-white text-3xl font-bold font-display">AS</span>
            </div>
            {/* Orbiting dots */}
            <div
              className="absolute -inset-3"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary-400" />
            </div>
            <div
              className="absolute -inset-5"
            >
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-accent-400" />
            </ div>
          </div>

          {/* Loading Text */}
          <div
            className="text-center"
          >
            <h2 className="text-xl font-display font-semibold text-white mb-2">
              Aniket<span className="text-primary-400">.dev</span>
            </h2>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map(() => (
                <div
                  className="w-2 h-2 rounded-full bg-primary-400"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

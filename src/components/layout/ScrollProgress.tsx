
export default function ScrollProgress() {

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-60 origin-left"
    >
      <div className="h-full w-full bg-linear-to-r from-primary-500 via-primary-400 to-accent-500 rounded-r-full" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <div className="relative h-15 w-15">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-white/10 border-t-amber-400" />
        <div className="absolute inset-3 rounded-full bg-black" />
      </div>
      <p className="mt-6 animate-pulse text-sm tracking-[0.3em] text-white/70">
        Loading Countries
      </p>
    </div>
  );
}
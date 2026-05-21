import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 pb-20 pt-36 text-white">
      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-4xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl md:p-14">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
            <Sparkles size={16} />
            About The Project
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            About World Explorer
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            World Explorer is a modern{" "}
            <span className="text-white">
              Next.js
            </span>{" "}
            project that uses real API data to display countries around
            the world. It practices App Router, layouts, server and
            client components, data fetching, caching, and dynamic
            routing while delivering a smooth and modern user
            experience.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="mt-5 text-xl font-bold">
                Real Country Data
              </h3>

              <p className="mt-3 leading-7 text-white/60">
                Explore countries with live API-powered information and
                dynamic content.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="mt-5 text-xl font-bold">
                Modern UI Design
              </h3>

              <p className="mt-3 leading-7 text-white/60">
                Built with glassmorphism styling, responsive layouts,
                and smooth interactions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="mt-5 text-xl font-bold">
                App Features
              </h3>

              <p className="mt-3 leading-7 text-white/60">
                Uses App Router, server components, dynamic routes, and
                advanced rendering techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
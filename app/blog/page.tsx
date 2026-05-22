import Link from "next/link";
import {ArrowRight, BookOpen} from "lucide-react";

const upcomingPosts = [
  {title: "Top Hidden Destinations Around The World"},
  {title: "Best Countries For Solo Travelers"},
  {title: "Travel Guides & Cultural Insights"},
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 pb-20 pt-36 text-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
                <BookOpen size={18} />
                Travel Stories & Guides
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
                Blog Coming Soon
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                Discover travel inspiration, destination highlights,
                cultural stories, and expert travel guides from around
                the world. New articles and insights are on the way.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/countries" className="group flex items-center gap-2 rounded-full border border-amber-400 hover:bg-amber-400 px-6 py-3 text-white hover:text-black transition duration-300">
                  Explore Countries

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 transition-all duration-300 hover:bg-white/10">
                  Back Home
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {upcomingPosts.map((post, index) => {
                return (
                  <div key={index} className="px-6 py-3">
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="mb-2 text-sm text-white/40">
                          Upcoming Article
                        </p>

                        <h3 className="text-lg font-normal md:font-semibold">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="mb-2 text-sm text-white/40">
              Future Content
            </p>

            <h3 className="text-xl font-bold">
              Travel Guides
            </h3>

            <p className="mt-3 leading-7 text-white/60">
              Detailed destination guides with travel tips, local
              culture, and must-see locations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="mb-2 text-sm text-white/40">
              Future Content
            </p>

            <h3 className="text-xl font-bold">
              Cultural Stories
            </h3>

            <p className="mt-3 leading-7 text-white/60">
              Learn about traditions, lifestyles, and stories from
              different countries and regions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="mb-2 text-sm text-white/40">
              Future Content
            </p>

            <h3 className="text-xl font-bold">
              Travel Inspiration
            </h3>

            <p className="mt-3 leading-7 text-white/60">
              Explore inspiring places and ideas for your next
              adventure around the globe.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

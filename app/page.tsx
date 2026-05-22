import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "./globals.css";

export default async function Home() {
  const res = await fetch(
    "https://restcountries.com/v3.1/alpha?codes=jp,fr,ca,it",
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  const countries = await res.json();

  return (
    <main className="bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex h-full items-center px-6 md:px-16">
          <div className="max-w-3xl">
            <h1 className="font-cha">
              <span className="block text-5xl font-bold tracking-[-0.04em] md:text-8xl">
                Explore{" "}
                <span className="ml-[-0.18em]">
                  The
                </span>
              </span>

              <span className="block pt-6 text-5xl font-bold md:text-8xl">
                World
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              Explore countries around the world and learn about their flags,
              capitals, populations, currencies, and languages.
            </p>

            <Link
              href="/countries"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-amber-400 hover:bg-amber-400 px-8 py-4 text-white hover:text-black transition duration-300"
            >
              <span>Explore Countries</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center bg-black px-6 py-24 md:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Most Explored Countries
            </h2>

            <p className="mt-4 text-lg text-white/70">
              Discover some of the world’s most visited and loved destinations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {countries.map((country: any) => (
              <Link
                key={country.cca3}
                href={`/countries/${country.cca3}`}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-amber-400/30"
              >
                <img
                  src={country.flags?.png}
                  alt={country.name?.common}
                  className="h-60 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">
                    {country.name?.common}
                  </h3>

                  <p className="mt-2 text-white/70">
                    {country.capital?.[0]} • {country.region}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

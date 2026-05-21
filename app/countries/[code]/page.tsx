import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    code: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { code } = await params;

  return {
    title: `${code} | World Explorer`,
  };
}

export default async function CountryDetailsPage({
  params,
}: Props) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const country = Array.isArray(data) ? data[0] : data;

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-36 text-white">
      <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <div className="mb-4 inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
              {country.region}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              {country.name?.common}
            </h1>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/60">
              Explore detailed information about{" "}
              <span className="text-white">
                {country.name?.common}
              </span>
              , including population, languages, currencies, timezone, and
              geographical region.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                  Official Name
                </p>

                <p>{country.name?.official}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                  Capital
                </p>

                <p>{country.capital?.[0] || "No Capital"}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                  Population
                </p>

                <p>{country.population?.toLocaleString()}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                  Subregion
                </p>

                <p>{country.subregion}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                  Languages
                </p>

                <p>
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : "No Languages"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                  Currencies
                </p>

                <p>
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((currency: any) => currency.name)
                        .join(", ")
                    : "No Currency"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                <p className="mb-1 text-xs uppercase tracking-wide text-white/40">
                  Time Zones
                </p>

                <p>{country.timezones?.join(", ")}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={country.maps?.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-4xl bg-amber-400 px-6 py-3.5 text-black transition-all duration-300 hover:scale-105"
              >
                View on Maps
              </a>

              <Link
                href="/countries"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3.5 transition-all duration-300 hover:bg-white/10"
              >
                Back
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 lg:mt-50">
            <img
              src={country.flags?.png}
              alt={country.name?.common}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
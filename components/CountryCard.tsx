import Link from "next/link";

export default function CountryCard({ country }: any) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-500 hover:scale-105 hover:border-amber-400/30">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-2 p-5 font-s text-white">
        <h2 className="text-xl font-bold">
          {country.name.common}
        </h2>

        <p>
          <span>Capital:</span>{" "}
          {country.capital?.[0] || "No Capital"}
        </p>

        <p>
          <span>Region:</span>{" "}
          {country.region}
        </p>

        <p>
          <span>Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>

        <Link
          href={`/countries/${country.cca3}`}
          className="mt-4 inline-block rounded-xl border border-amber-400/30 hover:bg-amber-400 hover:text-black px-5 py-3 transition-all duration-300 text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
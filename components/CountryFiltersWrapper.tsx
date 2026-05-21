"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Search, Sparkles } from "lucide-react";
import CountryCard from "./CountryCard";
import CountryFilters from "./Filters";

export default function CountryFiltersWrapper({ countries }: any) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const searchedCountries = useMemo(() => {
    return filteredCountries.filter((country: any) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, filteredCountries]);

  return (
    <div className="relative flex gap-6">
      {showFilters && (
        <div
          onClick={() => setShowFilters(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <div
        className={`hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] lg:block ${
          showFilters ? "max-w-[320px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <div
          className={`w-80 transform transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
            showFilters ? "translate-x-0" : "-translate-x-8"
          }`}
        >
          <CountryFilters
            countries={countries}
            setFilteredCountries={setFilteredCountries}
          />
        </div>
      </div>

      <div
        className={`dark-scrollbar fixed left-0 top-0 z-50 h-screen max-w-85 overflow-y-auto bg-black transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] lg:hidden ${
          showFilters ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <CountryFilters
          countries={countries}
          setFilteredCountries={setFilteredCountries}
          onClose={() => setShowFilters(false)}
        />
      </div>

      <div className="flex-1 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
        <div className="mb-10 transition-all duration-700 ease-out">
          <h1 className="text-5xl font-bold text-white">
            Explore Countries
          </h1>

          <p className="mt-2 text-white/60">
            Discover countries around the world
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white backdrop-blur-xl transition-all duration-500 hover:border-amber-400/50 hover:bg-white/10"
          >
            <span className="text-lg transition-all duration-300">
              {showFilters ? (
                <ArrowLeft size={20} />
              ) : (
                <Sparkles size={20} />
              )}
            </span>

            <span className="font-medium">
              Filter
            </span>
          </button>

          <div className="relative w-full">
            <Search
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-white/40"
            />

            <input
              type="text"
              placeholder="Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none backdrop-blur-xl transition-all duration-500 placeholder:text-white/40 focus:border-amber-400/50 focus:bg-white/10"
            />
          </div>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
            showFilters ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {searchedCountries.map((country: any) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
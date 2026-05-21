"use client";

import { useState } from "react";
import { RotateCcw, X } from "lucide-react";

type Country = {
  region: string;
  population: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string }>;
};

type Props = {
  countries: Country[];
  setFilteredCountries: (countries: Country[]) => void;
  onClose?: () => void;
};

export default function CountryFilters({
  countries,
  setFilteredCountries,
  onClose,
}: Props) {
  const [region, setRegion] = useState<string>("All");
  const [population, setPopulation] = useState<string>("All");
  const [language, setLanguage] = useState<string>("All");
  const [currency, setCurrency] = useState<string>("All");

  const regions: string[] = [
    "All",
    "Asia",
    "Europe",
    "Africa",
    "Americas",
    "Oceania",
  ];

  const languages: string[] = [
    "All",
    ...new Set(
      countries.flatMap((country: Country) =>
        country.languages ? Object.values(country.languages) : []
      )
    ),
  ];

  const currencies: string[] = [
    "All",
    ...new Set(
      countries.flatMap((country: Country) =>
        country.currencies
          ? Object.values(country.currencies).map(
              (currency: { name: string }) => currency.name
            )
          : []
      )
    ),
  ];

  const handleFilter = (
    selectedRegion: string = region,
    selectedPopulation: string = population,
    selectedLanguage: string = language,
    selectedCurrency: string = currency
  ) => {
    let filtered: Country[] = [...countries];

    if (selectedRegion !== "All") {
      filtered = filtered.filter(
        (country: Country) => country.region === selectedRegion
      );
    }

    if (selectedPopulation !== "All") {
      if (selectedPopulation === "Smallest") {
        filtered = filtered.filter(
          (country: Country) => country.population < 10000000
        );
      }

      if (selectedPopulation === "Medium") {
        filtered = filtered.filter(
          (country: Country) =>
            country.population >= 10000000 &&
            country.population < 50000000
        );
      }

      if (selectedPopulation === "Largest") {
        filtered = filtered.filter(
          (country: Country) => country.population >= 50000000
        );
      }
    }

    if (selectedLanguage !== "All") {
      filtered = filtered.filter((country: Country) =>
        country.languages
          ? Object.values(country.languages).includes(selectedLanguage)
          : false
      );
    }

    if (selectedCurrency !== "All") {
      filtered = filtered.filter((country: Country) =>
        country.currencies
          ? Object.values(country.currencies)
              .map((currency: { name: string }) => currency.name)
              .includes(selectedCurrency)
          : false
      );
    }

    setFilteredCountries(filtered);
  };

  const resetFilters = () => {
    setRegion("All");
    setPopulation("All");
    setLanguage("All");
    setCurrency("All");
    setFilteredCountries(countries);
  };

  const buttonStyles = (active: boolean) =>
    `flex-shrink break-words rounded-full border px-4 py-2 text-sm transition-all duration-300 sm:text-base ${
      active
        ? "border-amber-500 bg-amber-500 text-black"
        : "border-white/10 bg-white/5 text-white hover:border-amber-500"
    }`;

  return (
    <aside className="h-fit rounded-none border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6 md:rounded-3xl">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Filters
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={resetFilters}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:border-amber-500"
          >
            <RotateCcw size={18} />
          </button>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:border-amber-500 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Region
        </h3>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {regions.map((item: string) => (
            <button
              key={item}
              onClick={() => {
                setRegion(item);
                handleFilter(item, population, language, currency);
              }}
              className={buttonStyles(region === item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Population
        </h3>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["All", "Smallest", "Medium", "Largest"].map((item: string) => (
            <button
              key={item}
              onClick={() => {
                setPopulation(item);
                handleFilter(region, item, language, currency);
              }}
              className={buttonStyles(population === item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Languages
        </h3>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {languages.slice(0, 10).map((item: string) => (
            <button
              key={item}
              onClick={() => {
                setLanguage(item);
                handleFilter(region, population, item, currency);
              }}
              className={buttonStyles(language === item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-white">
          Currencies
        </h3>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {currencies.slice(0, 10).map((item: string) => (
            <button
              key={item}
              onClick={() => {
                setCurrency(item);
                handleFilter(region, population, language, item);
              }}
              className={buttonStyles(currency === item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
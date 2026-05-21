import CountryFiltersWrapper from "@/components/CountryFiltersWrapper";

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3,languages,currencies",
    {
      cache: "force-cache",
    }
  );

  const data = await res.json();

  const countries = Array.isArray(data)
    ? data
    : [];

  return (
    <main className="min-h-screen bg-black pb-20 pt-25">
      
      <div className="mx-auto w-full md:p-12 p-6">
        <CountryFiltersWrapper countries={countries} />
      </div>

    </main>
  );
}
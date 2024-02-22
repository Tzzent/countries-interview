import { useState, useEffect } from "react";

import { useSearch } from "../../../hooks/use-search";

import { Skeleton } from "../../../components/skeleton";
import { CountryCard } from "./country-card";
import { CountryDetail } from "./country-detail";

export const ListCountries = ({
  countries: initialCountries,
}) => {
  const { query, continentsSelected } = useSearch();
  const [countries, setCountries] = useState(initialCountries);

  useEffect(() => {
    if (!query && continentsSelected.length === 0) {
      return setCountries(initialCountries);
    }

    let filteredCountries = [];

    if (query) {
      filteredCountries = initialCountries.filter(country => (
        country.name.toLowerCase().includes(query.toLowerCase())
      ));
    }

    if (continentsSelected.length > 0) {
      filteredCountries = continentsSelected.flatMap(name => (
        initialCountries.filter(country => (
          country.continent.name.includes(name))
        )
      )).reverse();
    }

    setCountries(filteredCountries);
  }, [query, continentsSelected]);

  return (
    <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={country.code}
          code={country.code}
          emoji={country.emoji}
          countryName={country.name}
          continentName={country.continent.name}
          pictureUrl={country.pictureUrl}
        />
      ))}
      <CountryDetail />
    </div>
  )
}

ListCountries.Skeleton = function SkeletonListCountries() {
  return (
    <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
      <Skeleton className="w-full h-40 rounded-xl aspect-square" />
    </div>
  )
}
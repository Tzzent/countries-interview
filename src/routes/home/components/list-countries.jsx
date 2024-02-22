import { useState, useEffect } from "react";

import { wait } from "../../../lib/utils";
import { useSearch } from "../../../hooks/use-search";
import { unsplash } from "../../../lib/unsplash";

import { Skeleton } from "../../../components/skeleton";
import { CountryCard } from "./country-card";
import { CountryDetail } from "./country-detail";
import { PaginationFood } from "../../../components/pagination-foot";

const perPage = 8;

export const ListCountries = ({
  countries: initialCountries,
}) => {
  const { query, continentsSelected } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState(initialCountries.slice(0, perPage));

  const totalPages = Math.ceil(initialCountries.length / perPage);

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    if (!query && continentsSelected.length === 0) {
      setCountries(initialCountries.slice(0, perPage));
    }

    let filteredCountries = initialCountries;

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

    if (currentPage >= 1 && currentPage <= totalPages) {
      setCountries(filteredCountries.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
      ));
    }
  }, [query, continentsSelected, currentPage]);

  useEffect(() => {
    const fetchImages = async () => {
      // try {
      //   for await (const country of countries) {
      //     if (country?.pictureUrl) continue;

      //     const result = await unsplash.search.getPhotos({
      //       query: country.name,
      //       page: 1,
      //       perPage: 1,
      //       orientation: "landscape"
      //     });

      //     if (result.type === "success" && result.response) {
      //       const updatedCountry = {
      //         ...country,
      //         pictureUrl: result.response.results[0].urls.thumb,
      //       }

      //       setCountries(prev => prev.map(item => (
      //         item.code === country.code ? updatedCountry : item
      //       )));
      //     }

      //     await wait(1000);
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    };

    fetchImages();
  }, [countries]);

  return (
    <>
      <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <CountryCard
            key={country.code}
            code={country.code}
            countryName={country.name}
            continentName={country.continent.name}
            pictureUrl={country.pictureUrl}
          />
        ))}
        <CountryDetail />
      </div>
      <PaginationFood
        totalPages={totalPages}
        currentPage={currentPage}
        onNext={onNextPage}
        onPrevious={onPreviousPage}
      />
    </>
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
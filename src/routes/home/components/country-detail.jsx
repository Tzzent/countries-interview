import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { X } from "lucide-react";

import { cn } from "../../../lib/utils";
import { useDetail } from "../../../hooks/use-detail";
import { unsplash } from "../../../lib/unsplash";
import { GET_COUNTRY } from "../../../graphql/get-country";

import { Button } from "../../../components/button";
import { CountryFoot } from "./country-foot";
import { Skeleton } from "../../../components/skeleton";
import { UnsplashImage } from "../../../components/unsplash-image";

export const CountryDetail = () => {
  const { isOpen, onClose, code } = useDetail();
  const { loading, data, error } = useQuery(GET_COUNTRY, {
    variables: { code: code },
  })

  const [loadingPicture, setLoadingPicture] = useState(true);
  const [htmlLink, setHtmlLink] = useState();
  const [pictureUrl, setPictureUrl] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      if (!data?.country) return;

      try {
        const result = await unsplash.search.getPhotos({
          query: data.country.name,
          page: 1,
          perPage: 1,
          orientation: "landscape"
        });

        if (result.type === "success" && result.response) {
          setHtmlLink(result.response.results[0].links.html);
          setPictureUrl(result.response.results[0].urls.thumb);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingPicture(false);
      }
    }

    fetchImage();
  }, [data?.country]);

  const formatArray = (array) => {
    if (array.length > 0) {
      return array.map((item) => item.name).join(", ");
    }

    return "No data";
  };

  const list = useMemo(() => {
    if (loading || !data?.country) return [];

    return [
      {
        label: "Capital",
        description: data.country.capital,
      },
      {
        label: "Language",
        description: formatArray(data.country.languages),
      },
      {
        label: "Currency",
        description: data.country.currency,
      },
    ]
  }, [data?.country]);

  return (
    <div className={cn(
      "bg-white fixed right-0 h-full z-50 border w-9/12 max-w-xs transition-all duration-300",
      !isOpen && "w-0"
    )}>
      <div className={cn(
        "px-8 py-5 flex flex-col items-center",
        !isOpen && "hidden"
      )}>
        {loading ? (
          <CountryDetail.Skeleton />
        ) : !loading && data?.country && (
          <>
            <Button
              variant="ghost"
              onClick={onClose}
              className="absolute top-2 right-2"
            >
              <X className="w-5 h-5" />
            </Button>
            {loadingPicture || !pictureUrl ? (
              <Skeleton className="w-60 h-40 rounded-none" />
            ) : (
              <UnsplashImage
                id={data.country.name}
                htmlLink={htmlLink}
                pictureUrl={pictureUrl}
                className="rounded-lg mb-5"
              />
            )}
            <CountryFoot
              code={data.country.code}
              countryName={data.country.name}
              continentName={data.country.continent.name}
            />
            <ol className="space-y-2 mt-5">
              {list.map((item, index) => (
                <li key={index}>
                  <b className="text-blue-800">{item.label}:</b> {item.description}
                </li>
              ))}
              <li>
                <b className="text-blue-800">Region:</b>
                {data.country.states.length > 0 ? (
                  <ul className="mt-2 border px-5 py-2 overflow-auto max-h-40 block">
                    {data.country.states.map((state, index) => (
                      <li key={index}>
                        <p>{state.name}</p>
                      </li>
                    ))}
                  </ul>
                ) : (" No data")}
              </li>
            </ol>
          </>
        )}
      </div>
    </div>
  )
}

CountryDetail.Skeleton = function CountryDetailSkeleton() {
  return (
    <div>
      <Skeleton className="w-36 h-20 md:w-60 md:h-40 rounded-lg" />
      <div className="my-5 flex">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="ml-3 space-y-2">
          <Skeleton className="w-20 md:w-40 h-5 rounded-lg" />
          <Skeleton className="w-12 md:w-16 h-3 rounded-lg" />
        </div>
      </div>
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-3 rounded-lg" />
          <Skeleton className="w-20 md:w-36 h-3 rounded-lg" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-3 rounded-lg" />
          <Skeleton className="w-20 md:w-36 h-3 rounded-lg" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="w-14 h-3 rounded-lg" />
          <Skeleton className="w-20 md:w-36 h-3 rounded-lg" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-3 rounded-lg" />
          <Skeleton className="w-20 md:w-36 h-3 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
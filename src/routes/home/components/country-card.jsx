import { useDetail } from "../../../hooks/use-detail";

import { CountryFoot } from "./country-foot";

export const CountryCard = ({
  code,
  countryName,
  continentName,
  pictureUrl,
}) => {
  const { onOpen } = useDetail();

  const handleOpenDetail = () => {
    onOpen(code);
  }

  return (
    <div
      role="button"
      onClick={handleOpenDetail}
      className="rounded-xl overflow-hidden shadow-md hover:ring-2 hover:ring-purple-600 mb-5 bg-white"
    >
      <div className="w-full h-32">
        <img
          src={pictureUrl || "/images/no-image-placeholder.jpg"}
          alt={`${countryName}-landscape-image`}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="px-5 py-2">
        <CountryFoot
          code={code}
          countryName={countryName}
          continentName={continentName}
        />
      </div>
    </div>
  )
}
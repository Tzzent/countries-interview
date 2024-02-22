import { useDetail } from "../../../hooks/use-detail";

import { CountryFoot } from "./country-foot";

export const CountryCard = ({
  code,
  emoji,
  countryName,
  continentName,
  pictureUrl,
}) => {
  const { onOpen } = useDetail();
  //TODO: for each CountryCard get an image from Unsplash by name

  const handleOpenDetail = () => {
    onOpen(code);
  }

  return (
    <div
      role="button"
      onClick={handleOpenDetail}
      className="rounded-xl overflow-hidden shadow-md hover:ring-2 hover:ring-purple-600 mb-5 bg-white"
    >
      <div className="">
        <img
          src={pictureUrl || "/images/no-image-placeholder.jpg"}
          alt={`${countryName}-landscape-image`}
        />
      </div>
      <div className="px-5 py-2">
        <CountryFoot
          emoji={emoji}
          countryName={countryName}
          continentName={continentName}
        />
      </div>
    </div>
  )
}
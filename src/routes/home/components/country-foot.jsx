export const CountryFoot = ({
  emoji,
  countryName,
  continentName,
}) => {
  return (
    <div className="flex items-center">
      <div>
        <span role="img">
          {emoji}
        </span>
      </div>
      <div className="ml-3">
        <p className="text-blue-700 font-bold">{countryName}</p>
        <p className="text-xs text-gray-600">{continentName}</p>
      </div>
    </div>
  )
}
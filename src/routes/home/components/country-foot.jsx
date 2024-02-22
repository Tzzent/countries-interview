export const CountryFoot = ({
  code,
  countryName,
  continentName,
}) => {
  return (
    <div className="flex items-center">
      <div>
        <img
          src={`https://flagcdn.com/40x30/${code.toLowerCase()}.png`}
          alt={`${countryName}-flag-image`}
          className="object-cover object-center"
        />
      </div>
      <div className="ml-3">
        <p className="text-blue-700 font-bold">{countryName}</p>
        <p className="text-xs text-gray-600">{continentName}</p>
      </div>
    </div>
  )
}
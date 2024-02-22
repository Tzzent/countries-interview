import { cn } from "../../../lib/utils"

export const ContinentCard = ({
  name,
  pictureUrl,
  onClick,
  isSelected,
}) => {
  return (
    <div className="relative">
      <img
        role="button"
        onClick={onClick}
        src={pictureUrl}
        alt={`${name}-image`}
        className={cn(
          "object-cover object-center rounded-lg hover:ring-2 ring-purple-500",
          isSelected && "shadow-md shadow-purple-600 ring-2 ring-purple-600"
        )}
      />
      <div className="mt-1">
        <span className={cn(
          "text-gray-500 text-sm font-semibold",
          isSelected && "text-gray-800"
        )}>
          {name}
        </span>
      </div>
    </div>
  )
}
import { cn } from "../../../lib/utils";
import { useSearch } from "../../../hooks/use-search";
import { CONTINENTS } from "../../../constants/continents";

import { Button } from "../../../components/button";
import { ContinentCard } from "./continent-card";

export const FilterPopover = ({
  isVisible,
}) => {
  const {
    continentsSelected,
    setContinentsSelected,
    setQuery,
  } = useSearch();

  const isItemSelected = (name) => {
    return continentsSelected.includes(name);
  }

  const onClean = () => {
    setContinentsSelected([]);
  }

  const onClickContinent = (continent) => {
    if (!continent) return;

    setQuery("");

    const isSelected = isItemSelected(continent.name);

    if (isSelected) {
      setContinentsSelected(continentsSelected.filter(item => item !== continent.name));
    } else {
      setContinentsSelected([...continentsSelected, continent.name]);
    }
  }

  return (
    <div
      className={cn(
        "bg-white border p-5 absolute left-0 max-w-sm top-20 rounded-3xl shadow cursor-default",
        !isVisible && "hidden"
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-600 text-sm mr-3">Filter by continents</p>
        <Button
          onClick={onClean}
          variant="link"
        >
          Clean
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-center">
        {CONTINENTS.map((continent) => (
          <ContinentCard
            {...continent}
            key={continent.name}
            isSelected={isItemSelected(continent.name)}
            onClick={() => onClickContinent(continent)}
          />
        ))}
      </div>
    </div>
  )
}
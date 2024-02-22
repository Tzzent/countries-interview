import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";

import { cn } from "../../../lib/utils";
import { useSearch } from "../../../hooks/use-search";

import { Button } from "../../../components/button";
import { Label } from "../../../components/label";
import { Input } from "../../../components/input";
import { FilterPopover } from "./filter-popover";

export const InputSearch = ({
}) => {
  const { query, setQuery } = useSearch();
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const onFocus = () => {
    inputRef.current.focus();
    setIsFocused(true);
    setIsPopoverVisible(true);
  }

  const onBlur = () => {
    setIsFocused(false);
  }

  const onChange = (ev) => {
    setQuery(ev.target.value);
  }

  const onSearch = (ev) => {
    ev.stopPropagation();
    onSubmit();
  }

  const onClickOutside = () => {
    setIsPopoverVisible(false);
  }

  useOnClickOutside(containerRef, onClickOutside);

  const onSubmit = () => {

  }

  return (
    <div
      ref={containerRef}
      onClick={onFocus}
      className={cn(
        "bg-white rounded-full px-5 py-3 flex items-center gap-5 cursor-text border relative w-full max-w-3xl",
        isFocused && "ring-1 ring-blue-300",
      )}
    >
      <div className="flex flex-col w-full">
        <Label
          id="search-country"
          className="text-gray-500 font-bold"
        >
          País
        </Label>
        <Input
          ref={inputRef}
          id="search-country"
          placeholder="Write the country..."
          onChange={onChange}
          value={query}
          onBlur={onBlur}
          className="p-0 outline-none rounded-none border-0 focus:border-b focus:border-b-blue-600 max-w-60"
        />
      </div>
      <Button onClick={onSearch}>
        <Search className="w-4 h-4" /> <p className="hidden ml-2 sm:block">Buscar</p>
      </Button>
      <FilterPopover isVisible={isPopoverVisible} />
    </div>
  )
}
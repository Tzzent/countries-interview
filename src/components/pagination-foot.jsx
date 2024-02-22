import { ChevronsLeft, ChevronsRight } from "lucide-react";

import { Button } from "./button";

export const PaginationFood = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex justify-end gap-3 items-center">
      <div className="text-gray-600">
        <p>{currentPage} - {totalPages}</p>
      </div>
      <div className="flex items-center gap-1">
        <Button onClick={onPrevious}>
          <ChevronsLeft className="w-4 h-4" />
        </Button>
        <Button onClick={onNext}>
          <ChevronsRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
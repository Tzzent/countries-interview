import { forwardRef } from "react";

import { cn } from "../lib/utils";

export const Input = forwardRef(({
  id,
  type,
  placeholder,
  className,
  onBlur,
  onChange,
  value,
}, ref) => {
  return (
    <input
      ref={ref}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      className={cn(
        "border border-gray-300 rounded-xl px-4 py-2 w-full placeholder:text-xs text-xs sm:text-sm sm:placeholder:text-sm",
        className,
      )}
    />
  )
});
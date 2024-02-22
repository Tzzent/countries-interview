import { cn } from "../lib/utils";

export const Label = ({
  id,
  children,
  className,
}) => {
  return (
    <label
      htmlFor={id}
      className={cn(
        "text-sm sm:text-sm",
        className,
      )}
    >
      {children}
    </label>
  )
}
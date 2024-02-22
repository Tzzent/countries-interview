import { cn } from "../lib/utils";

export const Button = ({
  variant,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center bg-blue-600 text-white rounded-xl p-2 transition text-xs sm:text-sm",
        variant === "link" && "text-blue-600 bg-transparent hover:underline p-0",
        variant === "ghost" && "text-gray-500 bg-transparent hover:text-gray-700 p-0",
        className,
      )}
    >
      {children}
    </button>
  )
}
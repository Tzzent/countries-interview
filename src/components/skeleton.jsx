import { cn } from "../lib/utils"

export const Skeleton = ({
  className,
}) => {
  return (
    <div
      className={
        cn(
          "animate-pulse w-10 h-8 rounded-full bg-slate-600/30",
          className,
        )}
    />
  )
}
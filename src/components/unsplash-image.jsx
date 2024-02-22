import { Button } from "./button"

export const UnsplashImage = ({
  id,
  htmlLink,
  pictureUrl
}) => {
  return (
    <div className="group relative">
      <img
        src={pictureUrl}
        alt={`${id}-image`}
        className="object-cover"
      />
      <div className="hidden absolute bg-black/40 inset-x-0 bottom-0 text-white group-hover:flex group-hover:justify-end px-4 py-1">
        <a
          role="button"
          className="text-sm underline hover:font-bold transition-all"
          href={htmlLink}
          target="_blank"
        >
           visit original
        </a>
      </div>
    </div>
  )
}
import { NavLink } from "react-router-dom";

export const Item = ({
  href,
  label,
}) => {
  const defaultClass = "p-2 block";

  return (
    <li className="rounded-lg border-2 overflow-hidden transition hover:border-red-400">
      <NavLink
        to={href}
        className={({ isActive }) => (
          isActive
            ? `bg-red-400 ${defaultClass}`
            : `${defaultClass}`
        )}
      >
        {label}
      </NavLink>
    </li>
  )
}
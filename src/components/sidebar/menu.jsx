import { Menu as MenuIcon } from "lucide-react";

import { useSidebar } from "../../hooks/use-sidebar";

export const Menu = () => {
  const { onOpen } = useSidebar();

  return (
    <div
      role="button"
      onClick={onOpen}
      className="md:hidden"
    >
      <MenuIcon className="w-5 h-5" />
    </div>
  )
}
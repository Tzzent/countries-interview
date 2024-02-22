import { useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "../../lib/utils";
import { useSidebar } from "../../hooks/use-sidebar";

import { Logo } from "../logo";
import { Item } from "./item";

export const Sidebar = () => {
  const {
    isOpen,
    onClose,
  } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const routes = useMemo(() => [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/view-1",
      label: "View 1",
    },
    {
      href: "/view-2",
      label: "View 2",
    }
  ], []);

  return (
    <>
      <div className={cn(
        "bg-[#070F2B] fixed left-0 top-0 text-white z-[150] md:block transition-all duration-300 shadow-md min-h-screen overflow-hidden",
        isOpen ? "w-9/12" : "w-0",
        !isMobile && "w-full max-w-xs",
      )}>
        <div className={cn(
          "px-6 py-4",
          !isOpen && "hidden",
          !isMobile && "block",
        )}>
          <div className="mb-10 flex justify-center items-center gap-3">
            <Logo />
            Countries App
          </div>

          <ul className="space-y-3">
            {routes.map((route, index) => (
              <Item key={index}{...route} />
            ))}
          </ul>
        </div>
      </div >

      {/* Overlay */}
      < div
        onClick={onClose}
        className={
          cn(
            "fixed bg-gray-900/30 inset-0 z-[100] h-full",
            !isOpen && "hidden",
            !isMobile && "hidden"
          )}
      />
    </>
  )
}
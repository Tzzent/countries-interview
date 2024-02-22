import { Outlet } from "react-router-dom";

import { Sidebar } from "../sidebar"

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <main className="bg-slate-100 h-screen md:ml-80">
        <Outlet />
      </main>
    </>
  )
}
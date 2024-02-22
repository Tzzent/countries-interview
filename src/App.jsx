import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/home";
import View1Page from "./routes/view-1";
import View2Page from "./routes/view-2";

import { MainLayout } from "./components/layout/main-layout";
import { CountriesProvider } from "./providers/countries-provider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <HomePage />
        },
        {
          path: "view-1",
          element: <View1Page />
        },
        {
          path: "view-2",
          element: <View2Page />
        }
      ]
    }
  ]);

  return (
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  )
}

export default App;
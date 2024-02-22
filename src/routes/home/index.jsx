import { useQuery } from "@apollo/client";

import { GET_COUNTRIES } from "../../graphql/get-countries";

import { InputSearch } from "./components/input-search";
import { ListCountries } from "./components/list-countries";
import { Menu } from "../../components/sidebar/menu";

const HomePage = () => {
  const { data, loading } = useQuery(GET_COUNTRIES);

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <div className="flex items-center gap-3 justify-center">
        <Menu />
        <InputSearch />
      </div>
      {loading && !data ? (
        <ListCountries.Skeleton />
      ) : (
        <ListCountries countries={data.countries} />
      )}
    </div>
  )
}

export default HomePage;
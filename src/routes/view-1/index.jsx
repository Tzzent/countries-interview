import { Menu } from "../../components/sidebar/menu";

const View1Page = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex items-center gap-5">
        <Menu />
        <p>Welcome to the Page 1!</p>
      </div>
    </div>
  )
}

export default View1Page;
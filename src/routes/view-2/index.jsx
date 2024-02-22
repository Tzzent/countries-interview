import { Menu } from "../../components/sidebar/menu";

const View2Page = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex items-center gap-5">
        <Menu />
        <p>Welcome to the Page 2!</p>
      </div>
    </div>
  )
}

export default View2Page;
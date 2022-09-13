import { ADVERTISING, NAVBAR_RUBRICS } from "../data";
import Advertising from "./Advertising";
import NavBar from "./NavBar";
import Search from "./Search";

const SearchPanel = () => {
  return (
    <div className="navBarAndSearchWrap">
      <NavBar data={NAVBAR_RUBRICS}/>
      <Search />
      <Advertising data={ADVERTISING}/>
    </div>
  );
};

export default SearchPanel;

//компонент обертка для средней панели с поиском и навбаром рубрик

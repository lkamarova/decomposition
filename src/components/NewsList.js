import BottomNewsPanel from "./BottomNewsPanel/BottomNewsPanel";
import SearchPanel from "./SearchPanel/SearchPanel";
import TopNewsPanel from "./TopNewsPanel/TopNewsPanel";

const NewsList = () => {
  return (
    <div className="wrap">
      <TopNewsPanel />
      <SearchPanel />
      <BottomNewsPanel />
    </div>
  );
};

export default NewsList;

//файл отвечает за обертку всех компонентов,
//из которых состоит главная новостная страница

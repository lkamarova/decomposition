import { MAIN_NEWS, NEWS_ARR, rubricTop } from "../data";
import MainRubric from "./MainRubric";
import News from "../News";
import Rubric from "../Rubric";

const TopNewsPanel = () => {
  return (
    <div className="topNewsPanelWrap">
      <div className="rubricWrap">
        <div className="rubricTopWrap">
          {rubricTop?.map((rubric, index) => (
            <Rubric key={index} link={rubric.link} text={rubric.text} />
          ))}
        </div>
        {NEWS_ARR?.map((news, index) => (
          <News key={index} {...news} />
        ))}
      </div>
      <MainRubric {...MAIN_NEWS}/>
    </div>
  );
};

export default TopNewsPanel;

//верхняя новостная панель группирует более мелкие компоненты

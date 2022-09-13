import { BOTTOM_RUBRICS } from "../data";
import Rubric from "../Rubric";

const BottomNewsPanel = () => {
  return (
    <div className="bottomRubricWrap">
      {BOTTOM_RUBRICS.map((rubric, index) => (
        <div className="bottomRubric" key={index}>
          <Rubric link={rubric.link} text={rubric.text} news={rubric.news} />
        </div>
      ))}
    </div>
  );
};

export default BottomNewsPanel;

//нижняя панель отвечает за рендер рубрик с краткой сводкой новостей по каждой теме

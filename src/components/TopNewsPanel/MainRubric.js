import News from "../News";
import Rubric from "../Rubric";

const MainRubric = (prop) => {
  const { link, icon, text, news } = prop;

  return (
    <div className="mainRubric">
      <div>{icon}</div>
      <Rubric link={link} text={text} />
      <News icon={news.icon} link={link} text={news.text} />
    </div>
  );
};

export default MainRubric;

//главная рубрика,
//которая находится вверху и выделяется среди остальных наличием большой картинки
//и расположением

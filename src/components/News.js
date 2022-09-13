const News = (prop) => {
const {icon, link, text } = prop;
  return (
    <div className="news">
      {icon}
      <a className="newsText" href={link} >{text}</a>
    </div>
  );
};

export default News;

//отвечает за новостную строку, при необходимости отображает картинку

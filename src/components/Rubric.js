import News from "./News";

const Rubric = ({ link, text, news }) => {
  return (
    <div>
      <a className="rubricName" href={link}>
        {text}
      </a>
      {news?.map((news, index) => (
        <News key={index} {...news} />
      ))}
    </div>
  );
};

export default Rubric;

//название рубрики в виде ссылки, 
//которая при необходимости показывает сводку тематических ностей
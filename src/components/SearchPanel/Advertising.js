const Advertising = ({ data }) => {
  return (
    <div className="advertisingWrap">
      <a className="newsText" href={data.link}>
        {data.image}
      </a>
    </div>
  );
};

export default Advertising;

//настраиваемый компонент для рекламного баннера

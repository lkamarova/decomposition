import iconNews from "./../image/iconNews.png";
import imageAdv from "./../image/imageAdv.jpeg";
import doska from "./../image/doska.jpeg";

export const MAIN_NEWS = {
  icon: <img className="mainRubricIcon" src={doska} alt={"icon"} />,
  text: "Работа над ошибками",
  link: "#",
  news: {
    text: "Смотрите и запоминайте",
    link: "#",
  },
};

export const rubricTop = [
  {
    text: "Сейчас в СМИ",
    link: "#",
  },
  {
    text: "В Германии",
    link: "#",
  },
  {
    text: "Рекомендуем",
    link: "#",
  },
];

export const NEWS_ARR = [
  {
    icon: <img className="newsIcon" src={iconNews} alt={"icon"} />,
    text: "Нурмагомедов рассказал о счастливой жизни с лишним весом",
    link: "#",
  },
  {
    icon: <img className="newsIcon" src={iconNews} alt={"icon"} />,
    text: "Энергокомпаниям Германии потребовалась помощь на миллиарды евро",
    link: "#",
  },
  {
    icon: <img className="newsIcon" src={iconNews} alt={"icon"} />,
    text: "Тодоренко заявила о планах родить дочь",
    link: "#",
  },
  {
    icon: <img className="newsIcon" src={iconNews} alt={"icon"} />,
    text: "Европейские пивоварни оказались под угрозой закрытия из-за нехватки газа",
    link: "#",
  },
];

export const NAVBAR_RUBRICS = [
  {
    text: "Видео",
    link: "#",
  },
  {
    text: "Картинки",
    link: "#",
  },
  {
    text: "Новости",
    link: "#",
  },
  {
    text: "Карты",
    link: "#",
  },
  {
    text: "Макет",
    link: "#",
  },
  {
    text: "Переводчик",
    link: "#",
  },
  {
    text: "Эфир",
    link: "#",
  },
];

export const ADVERTISING = {
  image: <img className="advertisingImage" src={imageAdv} alt={"icon"} />,
  link: "#",
};

export const BOTTOM_RUBRICS = [
  {
    icon: <img className="mainRubricIcon" src={iconNews} alt={"icon"} />,
    text: "Погода",
    link: "#",
    news: [
      {
        text: "Нурмагомедов рассказал о счастливой жизни с лишним весом",
        link: "#",
      },
      {
        text: "Энергокомпаниям Германии потребовалась помощь на миллиарды евро",
        link: "#",
      },
    ],
  },

  {
    text: "Карта Германии",
    link: "#",
    news: [
      {
        text: "Энергокомпаниям Германии потребовалась помощь на миллиарды евро",
        link: "#",
      },
    ],
  },
];

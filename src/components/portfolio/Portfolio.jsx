import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Веб-сайт",
    title: "Картинная галерея А.Боголюбова",
    description:
      'Веб-сайт "Картинная галерея Алексея Боголюбова", на котором представлены мини-версии картин и их краткие описания. При выборе картины, вы попадаете на её страницц с подробным описанием',
    link: "https://github.com/soykatie/art-gallery",
  },
  {
    id: 2,
    image: card2,
    category: "Веб-разработка",
    title: "Генератор расписания занятий",
    description:
      "Веб-приложение предназначено для автоматического формирования школьных расписаний. Приложение использует генетический алгоритм для создания наиболее оптимального расписания на основе заданных норм, правил и требований. Кроме того, оно проверяет, соответствует ли сгенерированное расписание установленным нормам и требованиям",
    link: "https://soykatie-resume-2024-idpsjnm3h-soykaties-projects.vercel.app/",
  },
  {
    id: 3,
    image: card3,
    category: "Веб-разработка",
    title: "Система расчета объёма учебной работы",
    description:
      " Веб-приложение предоставляет инструменты для быстрого и простого формирования рабочих учебных планов по специальности на основе учебных планов по специальности, составления таблиц штатов и учета норм времени для расчета объема учебной работы и осуществления взаимодействия различных групп пользователей с надлежащими правами доступа",
    link: "https://diplom-by-kate.vercel.app/",
  },
  {
    id: 4,
    image: card4,
    category: "Разработка игр",
    title: 'Игра "Парные картинки"',
    description:
      "Идея игры состоит в том, чтобы найти все парные картинки по выбранной теме за фиксированное время. Сразу после того, как пользователь найдёт все парные картинки, он получает бонусы и переходит на следующий уровень, в противном случае он проигрывает",
    link: "https://github.com/soykatie/pair-pictures-game",
  },
  {
    id: 5,
    image: card5,
    category: "UX/UI дизайн",
    title: "Дизайн для сайта писательницы Н.Абгарян",
    description:
      "UX/UI дизайн сайта писательницы Наринэ Абгарян с представлением блоков биографии, книг, работ и публикаций",
    link: "https://www.figma.com/design/IB9OtfPOccmfjCFnxByX9J/Narine-Abgaryan?node-id=0-1&p=f&t=u5FbE9GRsmuFrZOJ-0",
  },
  {
    id: 6,
    image: card6,
    category: "UX/UI дизайн",
    title: "Дизайн для сайта магазина свадебных платьев",
    description:
      "Адаптивный дизайн для сайта магазина свадебных платьев. Работы была выполнена в рамках прохождения стажировки в одной из IT-компаний",
    link: "https://www.figma.com/design/wbZT0csAD7sLfYTKRUJBEp/Wedding-Dresses?node-id=0-1&p=f",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Портфолио</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Некоторые из наиболее значимых выполненных мной работ за период
            обучения в БГУ (2021 - 2025 гг.) представлены ниже
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Больше проектов
        </a>
      </div>
    </div>
  );
};

export default Portfolio;

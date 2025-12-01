import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            Специалист по информационным технологиям
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              2021-2025 – студентка специальности «Математика и информационные
              технологии (веб-программирование и интернет-технологии)»
              механико-математического факультета БГУ.
            </p>
            <p className="mt-3">
              2025 – по н.в. обучение в магистратуре по специальности
              «Математика и компьютерные науки» механико-математического
              факультета БГУ.
            </p>
            <p className="mt-3">
              2025 – по н.в. специалист отдела мониторинга качества образования
              Главного управления образовательной деятельности БГУ.
            </p>
            <p className="mt-3">
              2025 – по н.в. ассистент кафедры веб-технологий и компьютерного
              моделирования механико-математического факультета БГУ.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="https://soykatie-resume-2024-idpsjnm3h-soykaties-projects.vercel.app/"
            >
              <FontAwesomeIcon icon={faDownload} /> Резюме
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

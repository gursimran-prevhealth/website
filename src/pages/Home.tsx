import { Link } from "react-router-dom";
import { aiPowered, charging, forPatient, forPatient1, hero, heroMobile, lens, smartCare, technology } from "../assets";
import { Care, Contact, Faq, Testimonials } from "../components";
import Button from "../components/button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppLanguage } from "../store/slices/generalSlice";

export default function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { appLanguage } = useSelector((state) => state.general);
  useEffect(() => {
    const save = localStorage.getItem("language") || "en";
    if (save) {
      dispatch(setAppLanguage(save));
    }
  }, []);

  const valueList = t("home.values.cards", { returnObjects: true });
  const images = [charging, lens, technology];
  return (
    <div className="w-full">
      <section className="relative w-full flex flex-col items-center gap-10 px-5 py-24 sm:px-10 sm:py-32 pb-0 sm:pb-0">
        <img src="blur.png" className="absolute w-full h-full -z-10" alt="" />
        <div className="flex flex-col items-center gap-5 max-w-[1023px]">
          <h1 className="text-center text-[#23586A] font-medium tracking-wide font-[Lora] leading-[135%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {t("home.hero.title")}
          </h1>
          <p className="text-center text-[#555]  font-[300] font-['Work_Sans'] text-base sm:text-lg md:text-xl leading-[135%] tracking-wider max-w-[975px]">
            {t("home.hero.desc")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button>
            <a
              href="https://calendly.com/prevhealth/30min"
              target="_blank"
              className="font-['Work_Sans'] tracking-wider"
            >
              {t("home.hero.bookDemo")}
            </a>
          </Button>
        </div>
      </section>
      <div className="home-image w-[80%] relative overflow-hidden min-h-[160px] mx-auto mt-8">
        <div className="absolute inset-0 bg-gray-300 animate-pulse w-full h-full"></div>
        <img
          src={hero}
          alt="Hero"
          className="w-full object-cover relative bg-white hidden md:block"
        />
        <img
          src={heroMobile}
          alt="Hero"
          className="w-full object-cover relative bg-white md:hidden"
        />
      </div>

      <div className="w-full max-w-[1560px] mx-auto md:min-h-[384px] min-h-[633px] bg-[#F7FDFF] overflow-hidden flex items-center justify-center p-6 pt-0">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-32">
          <div className="max-w-64 w-full flex flex-col items-center gap-3">
            <div className="text-7xl md:text-8xl font-semibold font-['Work_Sans'] text-[#23586A] leading-[135%]">
              x5
            </div>
            <div className="text-base md:text-xl font-light tracking-wider font-['Work_Sans'] text-[#555] leading-[135%] text-center">
              {t("home.stats.productivity")}
            </div>
          </div>
          <div className="max-w-72 w-full flex flex-col items-center gap-3">
            <div className="text-7xl md:text-8xl font-semibold font-['Work_Sans'] text-[#23586A] leading-[135%]">
              500K+
            </div>
            <div className="text-base md:text-xl font-light tracking-wider font-['Work_Sans'] text-[#555] leading-[135%] text-center">
              {t("home.stats.patients")}
            </div>
          </div>
          <div className="max-w-64 w-full flex flex-col items-center gap-3">
            <div className="text-7xl md:text-8xl font-semibold font-['Work_Sans'] text-[#23586A] leading-[135%]">
              &gt;40%
            </div>
            <div className="text-base md:text-xl font-light tracking-wider font-['Work_Sans'] text-[#555] leading-[135%] text-center">
              {t("home.stats.cost")}
            </div>
          </div>
        </div>
      </div>
      <section className="w-full max-w-[1560px] mx-auto md:pt-[122px] md:pb-[70px] pb-[50px] pt-15 bg-white">
        <div className="w-full max-w-[937px] mx-auto flex flex-col items-center gap-3 md:gap-4 px-4">
          <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
            <div className="text-sm md:text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-tight md:leading-snug">
              {t("home.care.subTitle")}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl text-[#23586A]  font-medium font-[Lora] leading-10 md:leading-[62.40px] text-center">
            {t("home.care.title")}
          </h2>
          <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-['Work_Sans'] leading-snug md:leading-7 text-center">
            {t("home.care.desc")}
          </p>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col gap-24 md:px-20 px-5 max-w-[1560px] mx-auto pt-15 overflow-hidden">
        <div className="w-full flex lg:flex-row flex-col-reverse gap-6 h-full">
          <div className="w-full h-full flex items-end justify-start mt-auto">
            <div
              className={`w-full lg:max-w-[36.5rem] flex flex-col items-start gap-3 md:gap-4 `}
            >
              <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                <span className="text-sm md:text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("home.sections.doctors.label")}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">
                {t("home.sections.doctors.title")}
              </h2>
              <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                {t("home.sections.doctors.desc")}
              </p>
              <Button>
                <Link to="/for-doctors" className="tracking-wider">
                  {t("home.sections.doctors.button")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-end items-end">
            <img src={forPatient} alt="AI Powered" className="w-full" />
          </div>
        </div>
        <div className="w-full flex lg:flex-row-reverse flex-col-reverse gap-6 h-full">
          <div className="w-full h-full flex items-end justify-end mt-auto">
            <div className="w-full lg:max-w-[579px] flex flex-col items-start gap-3 md:gap-4">
              <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                <span className="text-sm md:text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("home.sections.patients.label")}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">
                {t("home.sections.patients.title")}
              </h2>
              <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                {t("home.sections.patients.desc")}
              </p>
              <Button>
                <Link to="/for-patients" className="tracking-wider">
                  {t("home.sections.patients.button")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-end items-end">
            <img src={forPatient1} alt="AI Powered" className="w-full" />
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col-reverse gap-6 h-full">
          <div className="w-full h-full flex items-end justify-start mt-auto">
            <div className="w-full lg:max-w-[579px] flex flex-col items-start gap-3 md:gap-4">
              <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                <span className="text-sm md:text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("home.sections.ai.label")}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">
                {t("home.sections.ai.title")}
              </h2>
              <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                {t("home.sections.ai.desc")}
              </p>
              <Button>
                <Link to="/ai-features" className="tracking-wider">
                  {t("home.sections.ai.button")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-end items-end md:-mr-20 -mr-5 md:w-[calc(100%+80px)] w-[calc(100%+20px)]">
            <img src={aiPowered} alt="AI Powered" className="w-full" />
          </div>
        </div>
      </section>
      <Care appLanguage={appLanguage} />
      <section className="w-full  px-5 sm:px-10 lg:px-20 py-5 md:py-16  overflow-hidden max-w-[1560px] mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-[613px] flex flex-col justify-start items-start gap-6 lg:gap-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="w-full lg:w-[524px] flex flex-col justify-start items-start gap-1">
                <div className="py-0.5 rounded-[10px] inline-flex justify-center items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-[#FD8883] rounded-full" />
                  <div className="text-center text-[#555] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-tight md:leading-snug">
                    {t("home.about.label")}
                  </div>
                </div>
                <div className="text-[#23586A] text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-10 md:leading-[54px] lg:leading-[62.40px]">
                  {t("home.about.title")}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-[#555] text-base md:text-lg lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-snug md:leading-6 lg:leading-7">
                  {t("home.about.desc1")}
                </div>
                <div className="text-[#555] text-base md:text-lg lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-snug md:leading-6 lg:leading-7">
                  {t("home.about.desc2")}
                </div>
              </div>
            </div>
            <Button>
              <Link to="/about"> {t("home.about.button")}</Link>
            </Button>
          </div>

          <div className="lg:w-[588px] relative md:w-full w-[calc(100vw-20px)] overflow-hidden md:right-0 -right-10">
            <img
              className="w-full h-full size-full"
              src={smartCare}
              alt="Clinvvo platform screenshot"
            />
          </div>
        </div>
      </section>
      <div className="w-full max-w-[1560px] mx-auto px-5 sm:px-10 lg:px-20  py-10 overflow-hidden flex flex-col items-center gap-16 md:gap-18 ">
        <div className="w-full max-w-[609px] flex flex-col items-center gap-3 md:gap-4 text-center">
          <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
            <span className="text-sm md:text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("home.values.subTitle")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">
            {t("home.values.title")}
          </h2>
          <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("home.values.desc")}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-18">
          {/* {[
            {
              icon: (
                <img
                  src={charging}
                  alt="Efficiency that Empowers"
                  className="w-11 h-16 "
                />
              ),
              title: "Efficiency that Empowers",
              desc: "Freeing up doctor's time so they can focus on care, not clicks",
            },
            {
              icon: (
                <img
                  src={lens}
                  alt="Clarity for Patients"
                  className="w-16 h-16 "
                />
              ),
              title: "Clarity for Patients",
              desc: "Helping people navigate care with confidence and ease",
            },
            {
              icon: (
                <img
                  src={technology}
                  alt="Technology with a Purpose"
                  className="w-20 h-20 "
                />
              ),
              title: "Technology with a Purpose",
              desc: "Using smart systems that seamlessly enhance every interaction",
            },
          ] */}
          {valueList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 md:gap-4"
            >
              <div className="flex flex-col items-center gap-5 md:gap-9">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img
                    src={images[index]}
                    alt="Efficiency that Empowers"
                    className="w-11 h-16 "
                  />
                </div>
                <h3 className="text-xl md:text-2xl text-[#23586A] font-medium font-[Lora] leading-[130%] text-center">
                  {item.title}
                </h3>
              </div>
              <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%] text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />

      <Faq />
      <Contact />
    </div>
  );
}

import { useEffect } from "react";
import { aboutDoctor, aboutPatient, ourmission, ourvision, work } from "../assets";
import { Contact } from "../components";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full">
      <section className="w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24 max-w-[1440px] flex flex-col items-center gap-12 mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4 w-full max-w-[980px]">
          <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%] mx-auto">
            {t("aboutus.hero.title")}
          </h2>
          <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("aboutus.hero.description")}{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <img
            src={aboutPatient}
            alt="Patient Image"
            className="w-full h-full md:rounded-bl-[60px] md:rounded-tl-[0px] rounded-tl-[60px]"
          />
          <img
            src={aboutDoctor}
            alt="Doctor Image"
            className="w-full h-full md:rounded-tr-[60px] md:rounded-br-[0px] rounded-br-[60px]"
          />
        </div>
      </section>
      <section className="w-full min-h-screen md:px-20 px-5 md:py-24 py-16 mx-auto flex flex-col items-center gap-16 max-w-[1440px]">
        <div className="w-full max-w-[900px] flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
              <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
              <div className="text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                {t("aboutus.builtWithPurpose.badge")}
              </div>
            </div>
            <h1 className="w-full text-[#23586a] text-4xl md:text-5xl lg:text-6xl font-medium font-['Lora'] leading-[1.35]">
              {t("aboutus.builtWithPurpose.title")}
            </h1>
          </div>
          <p className="w-full max-w-[743px] text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
            {t("aboutus.builtWithPurpose.description")}
          </p>
        </div>
        <div className="w-full min-h-[802px] grid md:grid-cols-2 grid-cols-1 xl:gap-24 lg:gap-20 md:gap-16 gap-12">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-4 max-w-[520px]">
              <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                <div className="text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                  {t("aboutus.mission.badge")}
                </div>
              </div>
              <p className="text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                {t("aboutus.mission.text")}
              </p>
            </div>
            <img
              src={ourmission}
              alt={t("aboutus.mission.badge")}
              className="max-w-full w-full"
            />
          </div>
          <div className="w-full flex md:flex-col flex-col-reverse gap-10">
            <img
              src={ourvision}
              alt="Our Vision"
              className="max-w-full w-full"
            />

            <div className="w-full flex flex-col gap-4 max-w-[520px]">
              <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                <div className="text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                  {t("aboutus.vision.badge")}
                </div>
              </div>
              <p className="text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                {t("aboutus.vision.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  md:max-w-[1440px]">
        <div className="w-full md:px-20 px-5 flex flex-col gap-9">
          <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
            <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
            <div className="text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
              {t("aboutus.whoWeAre.badge")}
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-[#23586a] xl:text-5xl md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[1.35]">
              {t("aboutus.whoWeAre.points.list-1")}
            </h3>
            <h3 className="text-[#23586a] xl:text-5xl md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[1.35]">
              {t("aboutus.whoWeAre.points.list-2")}
            </h3>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen md:px-20 px-5 md:py-24 py-16 mx-auto flex flex-col items-center gap-16 max-w-[1440px]">
        <div className="w-full max-w-[999px] flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col max-w-[514px] md:max-w-[700px] items-center gap-2 w-full">
            <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
              <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
              <div className="text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                {t("aboutus.aiSection.badge")}
              </div>
            </div>
            <h1 className="w-full text-[#23586a] text-4xl md:text-5xl lg:text-6xl font-medium font-['Lora'] leading-[1.35]">
              {t("aboutus.aiSection.title")}
            </h1>
          </div>
          <p className="w-full max-w-[743px] text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
            {t("aboutus.aiSection.description")}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img src={work} alt="Work" className="max-w-full rounded-[12px]" />
        </div>
      </section>
      <Contact />
    </div>
  );
}

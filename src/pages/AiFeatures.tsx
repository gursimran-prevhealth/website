import { useEffect } from "react";
import {
  consult1,
  consult1Sv,
  consult2,
  consult2Sv,
  consult3,
  consult3Sv,
  consult4,
  consult4Sv,
  consult5,
  consult5Sv,
  consult6,
  consult6Sv,
  consult7,
  consult7Sv,
  consult8,
  consult8Sv,
  heroAi,
  heroAIMobile,
  heroAIMobileSV,
  heroAiSv,
} from "../assets";
import {
  Button,
  Contact,
  Faq,
  Features,
  Testimonials,
  Workflow,
} from "../components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAppLanguage } from "../store/slices/generalSlice";
import type { RootState } from "../store/store";

function AiFeatures() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { appLanguage } = useSelector((state: RootState) => state.general);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const save = localStorage.getItem("language") || "en";
    if (save) {
      dispatch(setAppLanguage(save));
    }
  }, []);
  return (
    <div className="w-full">
      <section className="relative w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24">
        <img
          src="blur.png"
          className="absolute top-1 w-full h-full -z-10"
          alt=""
        />
        <div
          className={`w-full flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-12 ${
            appLanguage == "de" ? "max-w-[59rem]" : "max-w-[47rem]"
          }  mx-auto`}
        >
          <div className="flex flex-col justify-start items-start gap-3 md:gap-5 w-full">
            <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%]">
              {t("aifeatures.heroSection.heading")}
            </h2>
            <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("aifeatures.heroSection.description")}
            </p>
          </div>
          <Button>
            <a
              href="https://calendly.com/prevhealth/30min"
              target="_blank"
              className="tracking-wider"
            >
              {t("aifeatures.heroSection.buttonText")}
            </a>
          </Button>
        </div>
        <div className="w-full max-w-full md:pt-12 pt-24 min-w-[calc(100vw-20px)] md:min-w-[unset]">
          <img
            src={appLanguage === "sv" ? heroAiSv : heroAi}
            alt={t("aifeatures.heroSection.heading")}
            className="max-w-[1168px] mx-auto w-full md:block hidden"
          />
          <img
            src={appLanguage === "sv" ? heroAIMobileSV : heroAIMobile}
            alt={t("aifeatures.heroSection.heading")}
            className="w-full relative md:hidden"
          />
        </div>
      </section>
      <section className="w-full min-h-screen flex items-center justify-center lg:px-20 md:px-10 px-5 max-w-full">
        <div className="w-full md:max-w-[1280px] mx-auto inline-flex flex-col justify-start items-center gap-8 md:gap-12">
          <div className="w-full md:w-[909px] flex flex-col justify-start items-center gap-4">
            <div className="w-full md:w-[535px] flex flex-col justify-start items-center gap-2">
              <div className="py-0.5 rounded-[10px] inline-flex justify-center items-center gap-1">
                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full" />
                <div className="text-center text-[#545454] text-sm md:text-base font- tracking-wider font-['Work_Sans'] leading-[135%]">
                  {t("aifeatures.coreFeatures.title")}
                </div>
              </div>
              <div className="text-center text-[#23586a] text-3xl md:text-5xl font-medium font-['Lora'] leading-[135%]">
                {t("aifeatures.coreFeatures.heading")}
              </div>
            </div>
            <div className="text-center text-[#545454] text-base md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("aifeatures.coreFeatures.subtitle")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-10 w-full max-w-full">
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] md:col-span-2 md:grid grid-cols-3 flex flex-col">
              <div className="col-span-1 w-full">
                <div className="max-w-[411px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                  {t("aifeatures.featuresList-1.title")}
                </div>
                <div className="text-[#555] font-['Work_Sans'] text-base tracking-wider font-light leading-[135%] pt-2 max-w-[315px]">
                  {t("aifeatures.featuresList-1.description")}
                  <ul className="list-disc pl-4">
                    <li className="font-light tracking-wider">
                      {t("aifeatures.featuresList-1.points.list-1")}
                    </li>
                    <li className="font-light tracking-wider">
                      {t("aifeatures.featuresList-1.points.list-2")}
                    </li>
                    <li className="font-light tracking-wider">
                      {t("aifeatures.featuresList-1.points.list-3")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full col-span-2">
                <img
                  src={appLanguage === "sv" ? consult1Sv : consult1}
                  alt=""
                  className="max-w-full w-full md:pl-20"
                />
              </div>
            </div>
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
              <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                {t("aifeatures.featuresList-2.title")}
              </div>
              <p className="text-[#555] font-['Work_Sans'] text-base tracking-wider font-light leading-[135%] pt-2 max-w-[490px]">
                {t("aifeatures.featuresList-2.description")}
              </p>
              <div className="w-full flex justify-center md:pt-8 pt-4">
                <img
                  src={appLanguage === "sv" ? consult2Sv : consult2}
                  alt="Consult"
                  className="max-w-[295px] w-full"
                />
              </div>
            </div>
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
              <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                {t("aifeatures.featuresList-3.title")}
              </div>
              <div className="text-[#555] font-['Work_Sans'] text-base font-light tracking-wider leading-[135%] pt-2 max-w-[393px]">
                {t("aifeatures.featuresList-3.description")}
                <ul className="list-disc pl-4">
                  <li className="font-light tracking-wider">
                    {t("aifeatures.featuresList-3.points.list-1")}
                  </li>
                  <li className="font-light tracking-wider">
                    {t("aifeatures.featuresList-3.points.list-2")}
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center md:pt-16 pt-12">
                <img
                  src={appLanguage === "sv" ? consult3Sv : consult3}
                  alt="Consult"
                  className="max-w-[203px] md:ml-20"
                />
              </div>
            </div>
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
              <img
                src={appLanguage === "sv" ? consult4Sv : consult4}
                alt=""
                className="max-w-full w-full"
              />
              <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%] md:pt-6 pt-4">
                {t("aifeatures.featuresList-4.title")}
              </div>
              <p className="text-[#555] font-['Work_Sans'] text-base font-light tracking-wider leading-[135%] pt-2 max-w-[540px]">
                {t("aifeatures.featuresList-4.description")}
              </p>
            </div>
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
              <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                {t("aifeatures.featuresList-8.title")}
              </div>
              <p className="text-[#555] font-['Work_Sans'] text-base font-light tracking-wider leading-[135%] pt-2 pb-4 max-w-[490px]">
                {t("aifeatures.featuresList-8.description")}
              </p>
              <img
                src={appLanguage === "sv" ? consult5Sv : consult5}
                alt=""
                className="max-w-full w-full"
              />
            </div>
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] md:col-span-2 flex md:flex-row flex-col">
              <div className="w-full">
                <div className="max-w-[235px] md:max-w-[300px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                  {t("aifeatures.featuresList-5.title")}
                </div>
                <p className="text-[#555] font-['Work_Sans'] text-base font-light tracking-wider leading-[135%] pt-2 max-w-[460px]">
                  {t("aifeatures.featuresList-5.description")}
                </p>
              </div>
              <div className="w-full">
                <img
                  src={appLanguage === "sv" ? consult6Sv : consult6}
                  alt=""
                  className="max-w-[95%] ml-auto w-full"
                />
              </div>
            </div>
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
              <img
                src={appLanguage === "sv" ? consult7Sv : consult7}
                alt=""
                className="max-w-full w-full"
              />
              <div className="max-w-[390px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%] md:pt-6 pt-4">
                {t("aifeatures.featuresList-6.title")}
              </div>
              <p className="text-[#555] font-['Work_Sans'] text-base font-light tracking-wider leading-[135%] pt-2 max-w-[460px]">
                {t("aifeatures.featuresList-6.description")}
              </p>
            </div>
            <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
              <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                {t("aifeatures.featuresList-7.title")}
              </div>
              <p className="text-[#555] font-['Work_Sans'] text-base font-light tracking-wider leading-[135%] pt-2 max-w-[572px]">
                {t("aifeatures.featuresList-7.description")}
              </p>
              <div className="w-full flex justify-center md:pt-8 pt-4">
                <img
                  src={appLanguage === "sv" ? consult8Sv : consult8}
                  alt="Consult"
                  className="max-w-[430px] w-full"
                />
              </div>
            </div>
          </div>

          <Button>
            <a
              href="https://calendly.com/prevhealth/30min"
              target="_blank"
              className="tracking-wider"
            >
              {t("aifeatures.heroSection.buttonText")}
            </a>
          </Button>
        </div>
      </section>
      <Features appLanguage={appLanguage} />
      <Workflow appLanguage={appLanguage} />
      <Testimonials />
      <Faq />
      <Contact appLanguage={appLanguage} />
    </div>
  );
}

export default AiFeatures;

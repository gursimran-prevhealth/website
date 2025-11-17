import { useEffect } from "react";
import {
  cloud,
  customize,
  demo,
  ecosystem1,
  ecosystem1Sv,
  ecosystem2,
  ecosystem2Sv,
  ecosystem3,
  ecosystem3Sv,
  ecosystem5,
  ecosystem5Sv,
  ecosystem6,
  gdpr,
  heroDoctor,
  heroDoctor1,
  heroDoctor1Sv,
  heroDoctorSv,
  idSvg,
  lock,
  microphone,
  rocket,
  support,
  sWorkFlow1,
  sWorkFlow1Sv,
  sWorkFlow2,
  sWorkFlow2Sv,
  sWorkFlow3,
  sWorkFlow3Sv,
} from "../assets";
import { Button, Contact, Faq, StakeHolder } from "../components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAppLanguage } from "../store/slices/generalSlice";
import type { RootState } from "../store/store";

function ForDoctors() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const dispatch = useDispatch();
  const { appLanguage } = useSelector((state: RootState) => state.general);
  useEffect(() => {
    const save = localStorage.getItem("language") || "en";
    if (save) {
      dispatch(setAppLanguage(save));
    }
  }, []);

  return (
    <div className="w-full">
      <section className="w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24 max-w-full">
        <div
          className={`w-full flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-12 ${
            appLanguage === "de" ? " max-w-[55rem]" : "max-w-[46rem]"
          } mx-auto`}
        >
          <div className="flex flex-col justify-start items-start gap-3 md:gap-4 w-full">
            <h2
              className={`w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-[4rem] font-medium font-['Lora'] leading-[135%]  mx-auto ${
                appLanguage === "de" ? " max-w-[55rem]" : "max-w-[40rem]"
              }`}
            >
              {t("forDoctors.hero.title")}
            </h2>

            <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.hero.desc")}
            </p>
          </div>
          <Button>
            <a
              href="https://calendly.com/prevhealth/30min"
              target="_blank"
              className="tracking-wider"
            >
              {t("forDoctors.hero.button")}
            </a>
          </Button>
        </div>
        <div className="w-full max-w-full md:min-w-[unset]  min-w-screen relative -left-5 md:left-[unset] md:pt-0 pt-18">
          <img
            src={appLanguage === "sv" ? heroDoctorSv : heroDoctor}
            alt={t("forDoctors.hero.title")}
            className="w-full object-cover relative mx-auto md:block hidden max-w-[1093px]"
            style={{
              filter: "drop-shadow(10px 10px 20px rgba(0,0,0,0.5))",
            }}
          />
          <img
            src={appLanguage === "sv" ? heroDoctor1Sv : heroDoctor1}
            alt={t("forDoctors.hero.title")}
            className="w-full relative md:hidden drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col items-center gap-12 md:px-20 px-5 md:py-24 py-16">
        <div
          className={`w-full ${
            appLanguage === "de" ? "max-w-[37.5rem]" : "max-w-[33.5rem]"
          } flex flex-col items-center gap-2.5`}
        >
          <div className="rounded-[10px] inline-flex items-center gap-2">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
            <span className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.subTitle")}
            </span>
          </div>
          <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-medium font-['Lora'] leading-[135%]">
            {t("forDoctors.ecosystemSection.title")}
          </h2>
          <p className="w-full text-center text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("forDoctors.ecosystemSection.desc")}
          </p>
        </div>
        <div className="w-full md:grid flex flex-col md:gap-x-4 md:gap-y-5 gap-10 grid-cols-3 grid-rows-5">
          <div className="w-full h-full row-start-1 row-end-4 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <img
              src={appLanguage === "sv" ? ecosystem1Sv : ecosystem1}
              alt={t("forDoctors.ecosystemSection.features.dashboard.alt")}
              className="max-w-full mx-auto"
            />
            <h3 className="w-full justify-start text-[#343434] md:text-[1.75rem] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.dashboard.title")}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.dashboard.desc")}
            </div>
          </div>
          <div className="w-full h-full row-start-1 row-end-3 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <img
              src={appLanguage === "sv" ? ecosystem2Sv : ecosystem2}
              alt={t("forDoctors.ecosystemSection.features.aiNotes.alt")}
              className="max-w-full mx-auto"
            />
            <h3 className="w-full justify-start text-[#343434] md:text-[1.75rem] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.aiNotes.title")}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.aiNotes.desc")}
            </div>
          </div>
          <div className="w-full h-full row-start-1 row-end-4 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <img
              src={appLanguage === "sv" ? ecosystem3Sv : ecosystem3}
              alt={t("forDoctors.ecosystemSection.features.smartIntake.alt")}
              className="max-w-full mx-auto"
            />
            <h3 className="w-full justify-start text-[#343434] md:text-[1.75rem] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.smartIntake.title")}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.smartIntake.desc")}
            </div>
          </div>
          <div className="w-full h-full row-start-4 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <div className="w-full min-h-32 flex justify-center items-center">
              <div className="w-44 h-8 px-2 py-1.5 bg-[#fd8883] cursor-pointer rounded-3xl outline-[0.27px] outline-offset-[-0.27px] outline-[#fec2b5] inline-flex justify-center items-center gap-1">
                <img
                  src={microphone}
                  alt={t("forDoctors.ecosystemSection.features.voiceNotes.alt")}
                />
                <div className="text-center justify-start text-white text-xs font-light font-['Work_Sans'] leading-none">
                  {t("forDoctors.ecosystemSection.features.voiceNotes.micText")}
                </div>
              </div>
            </div>
            <h3 className="w-full justify-start text-[#343434] md:text-[1.75rem] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.voiceNotes.title")}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.voiceNotes.desc")}
            </div>
          </div>
          <div className="w-full h-full row-start-3 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2 overflow-hidden">
            <img
              src={appLanguage === "sv" ? ecosystem5Sv : ecosystem5}
              alt={t(
                "forDoctors.ecosystemSection.features.resourceSharing.alt"
              )}
              className="max-w-full mx-auto ml-4"
            />

            <h3 className="w-full justify-start text-[#343434] md:text-[1.75rem] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.resourceSharing.title")}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.resourceSharing.desc")}
            </div>
          </div>
          <div className="w-full h-full row-start-4 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <img
              src={ecosystem6}
              alt={t("forDoctors.ecosystemSection.features.groupSession.alt")}
              className="max-w-full mx-auto"
            />

            <h3 className="w-full justify-start text-[#343434] md:text-[1.75rem] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.groupSession.title")}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.ecosystemSection.features.groupSession.desc")}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full sm:min-h-screen flex flex-col items-center gap-12 md:px-20 px-5 md:py-24">
        <div className="w-full max-w-[475px] md:max-w-[900px] flex flex-col items-center gap-2.5 ">
          <div className="rounded-[10px] inline-flex items-center gap-2">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
            <span className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.workflowSection.subTitle")}
            </span>
          </div>
          <h2 className="w-full md:w-[65%] pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
            {t("forDoctors.workflowSection.title")}
          </h2>
          <p className="w-full text-center text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("forDoctors.workflowSection.desc")}
          </p>
        </div>

        <div className="w-full max-w-[1280px]">
          <div className="w-full pb-4 md:pb-0 overflow-x-auto md:overflow-x-visible scrollbar-hide p-3 py-4 sm:p-4">
            <div className="w-max md:w-full grid grid-cols-3 gap-4">
              <div className="w-[300px] md:w-full flex flex-col gap-4">
                <div className="w-full bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex items-center justify-center">
                  <img
                    src={appLanguage === "sv" ? sWorkFlow1Sv : sWorkFlow1}
                    alt={t("forDoctors.workflowSection.steps.login.alt")}
                    className="w-full object-fill"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                    {t("forDoctors.workflowSection.steps.login.title")}
                  </h3>
                  <p className="text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                    {t("forDoctors.workflowSection.steps.login.desc")}
                  </p>
                </div>
              </div>

              <div className="w-[300px] md:w-full flex flex-col gap-4">
                <div className="w-full bg-neutral-100 rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col items-center justify-center gap-2">
                  <img
                    src={appLanguage === "sv" ? sWorkFlow2Sv : sWorkFlow2}
                    alt={t(
                      "forDoctors.workflowSection.steps.connectConsult.alt"
                    )}
                    className="w-full max-w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                    {t("forDoctors.workflowSection.steps.connectConsult.title")}
                  </h3>
                  <p className="text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                    {t("forDoctors.workflowSection.steps.connectConsult.desc")}
                  </p>
                </div>
              </div>

              <div className="w-[300px] md:w-full flex flex-col gap-4">
                <div className="w-full bg-neutral-100 rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col items-center justify-center gap-2">
                  <img
                    src={appLanguage === "sv" ? sWorkFlow3Sv : sWorkFlow3}
                    alt={t("forDoctors.workflowSection.steps.aiNotes.alt")}
                    className="w-full max-w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                    {t("forDoctors.workflowSection.steps.aiNotes.title")}
                  </h3>
                  <p className="text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                    {t("forDoctors.workflowSection.steps.aiNotes.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-start items-start lg:items-start  gap-12 md:px-20 px-5 md:py-24 py-16  max-w-[1440px] mx-auto">
        <div className="w-full max-w-[420px] flex flex-col justify-start items-start gap-12">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="py-1 rounded-[10px] inline-flex justify-center items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full" />
              <span className="text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                {t("forDoctors.launchSection.subTitle")}
              </span>
            </div>
            <h2 className="text-[#23586a] text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
              {t("forDoctors.launchSection.title")}
            </h2>
          </div>
          <Button className="md:hidden block">
            <a href="https://calendly.com/prevhealth/30min" target="_blank">
              {t("forDoctors.launchSection.features.demo.title")}
            </a>
          </Button>
        </div>
        <div className="w-full overflow-x-auto max-w-full scrollbar-hide md:p-0 p-1">
          <div className="w-full md:grid grid-cols-1 md:grid-cols-2 gap-4 flex px-2 py-4 sm:p-4">
            <div className="w-full min-w-[300px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
              <img
                src={demo}
                alt={t("forDoctors.launchSection.features.demo.alt")}
                className="w-12 h-12"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-[#23586a] text-xl sm:text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.demo.title")}
                </h3>
                <p className="text-[#545454]  text-base sm:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.demo.desc")}
                </p>
              </div>
            </div>
            <div className="w-full min-w-[300px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
              <img
                src={customize}
                alt={t("forDoctors.launchSection.features.customize.alt")}
                className="w-12 h-12"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-[#23586a] text-xl sm:text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.customize.title")}
                </h3>
                <p className="text-[#545454] text-base sm:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.customize.desc")}
                </p>
              </div>
            </div>
            <div className="w-full min-w-[300px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
              <img
                src={rocket}
                alt={t("forDoctors.launchSection.features.brandLaunch.alt")}
                className="w-12 h-12"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-[#23586a] text-xl sm:text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.brandLaunch.title")}
                </h3>
                <p className="text-[#545454] text-base sm:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.brandLaunch.desc")}
                </p>
              </div>
            </div>

            <div className="w-full min-w-[300px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
              <img
                src={support}
                alt={t("forDoctors.launchSection.features.support.alt")}
                className="w-12 h-12"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#23586a] text-xl sm:text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.support.title")}
                </h3>
                <p className="text-[#545454] text-base sm:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("forDoctors.launchSection.features.support.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button className="md:hidden block">
          <a
            href="https://calendly.com/prevhealth/30min"
            target="_blank"
            className="tracking-wider"
          >
            {t("forDoctors.launchSection.button")}
          </a>
        </Button>
      </div>
      <StakeHolder appLanguage={appLanguage} />
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-12 md:px-20 px-5 md:py-24 py-16 max-w-[1063px] mx-auto">
        <div className="w-full max-w-[616px] flex flex-col items-center gap-2.5">
          <div className="rounded-[10px] inline-flex items-center gap-2">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
            <span className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forDoctors.securitySection.subTitle")}
            </span>
          </div>
          <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
            {t("forDoctors.securitySection.title")}
          </h2>
        </div>
        <div className="w-full md:max-w-[unset] max-w-[257px] flex lg:gap-16 gap-12 md:flex-row flex-col h-full items-center">
          <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
            <img src={gdpr} alt="GDPR Compliant" />
            <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">
              {t("forDoctors.securitySection.features.gdpr")}
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
            <img src={lock} alt="Data encryption at rest and in transit" />
            <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">
              {t("forDoctors.securitySection.features.encryption")}
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
            <img src={idSvg} alt="SITHS, BankID based login" />
            <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">
              {t("forDoctors.securitySection.features.bankId")}
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
            <img src={cloud} alt="Secure cloud infrastructure" />
            <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">
              {t("forDoctors.securitySection.features.cloud")}
            </p>
          </div>
        </div>
      </section>
      <Faq />
      <Contact appLanguage={appLanguage} />
    </div>
  );
}

export default ForDoctors;
import { useTranslation } from "react-i18next";
import {
  aiTranscription,
  aiTranscriptionSv,
  dashboard,
  dashboardDe,
  digitalConsultation,
  digitalConsultationSv,
  questionnaires,
  questionnairesSv,
  templateDropdown,
  templateDropdownSv,
} from "../../assets";
import type { CareProps } from "../../lib/consts";

function Care({ appLanguage }: CareProps) {
  const { t } = useTranslation();
  return (
    <section className="w-full md:py-36 md:px-20 py-16 px-5 max-w-[1560px] mx-auto min-h-screen">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-8 md:gap-14">
        <div
          className={`w-full ${
            appLanguage === "de" ? "max-w-[42rem]" : "max-w-[36rem]"
          } flex flex-col items-center gap-3 md:gap-4 text-center`}
        >
          <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
            <span className="text-sm md:text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("care.section.subTitle")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">
            {t("care.section.title")}
          </h2>
          <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("care.section.desc")}
          </p>
        </div>
        <div className="w-full max-w-full overflow-x-scroll scrollbar-hide">
          <div className="w-full flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-5">
            <div className="bg-white md:min-w-[unset] sm:h-[26.25rem]  min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-5 flex flex-col md:flex-row gap-2 sm:gap-0 md:col-span-2 overflow-hidden">
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-xl md:text-[1.75rem] text-neutral-700 font-medium font-['Work_Sans'] leading-[135%]">
                  {t("care.features.dashboard.title")}
                </h3>
                <p className="text-base text-[#555555] tracking-normal font-normal font-['Work_Sans'] leading-[135%]">
                  {t("care.features.dashboard.desc")}
                </p>
              </div>
              <div className="relative md:w-[200%] w-[100%] flex items-end">
                <img
                  className="min-w-[calc(100vw-32px)] md:min-w-[unset] right-4 relative md:-right-6  -bottom-6 z-10  md:min-h-[340px] "
                  src={appLanguage === "sv" ? dashboardDe : dashboard}
                  alt={t("care.features.dashboard.alt")}
                />
              </div>
            </div>

            <div className="bg-white md:min-w-[unset] sm:h-[26.25rem] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-5 flex flex-col gap-2">
              <h3 className="text-xl sm:w-[85%] md:text-[1.75rem] text-neutral-700 font-medium font-['Work_Sans'] leading-[135%]">
                {t("care.features.questionnaires.title")}
              </h3>
              <p className="text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                {t("care.features.questionnaires.desc")}
              </p>
              <img
                src={appLanguage === "sv" ? questionnairesSv : questionnaires}
                alt={t("care.features.questionnaires.alt")}
                className="h-[190px] w-[240px] m-auto"
              />
            </div>

            <div className="bg-white md:min-w-[unset] sm:h-[26.25rem] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-5 flex flex-col gap-0 overflow-hidden">
              <div className="w-full">
                <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-['Work_Sans'] leading-[135%] pb-4">
                  {t("care.features.aiTranscription.title")}
                </h3>
                <p className="text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("care.features.aiTranscription.desc")}
                </p>
              </div>
              <div className="w-full h-full">
                <img
                  src={
                    appLanguage === "sv" ? aiTranscriptionSv : aiTranscription
                  }
                  alt={t("care.features.aiTranscription.alt")}
                  className="relative -bottom-20 sm:-bottom-14 -right-10 sm:-right-20 h-full w-full"
                />
              </div>
            </div>

            <div className="bg-white md:min-w-[unset] sm:h-[26.25rem] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-5 flex flex-col justify-between gap-2">
              <div className="relative h-40">
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  src={
                    appLanguage === "sv"
                      ? digitalConsultationSv
                      : digitalConsultation
                  }
                  alt={t("care.features.digitalConsultation.alt")}
                />
              </div>
              <div className="w-full pb-5">
                <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-['Work_Sans'] leading-[135%] pb-4">
                  {t("care.features.digitalConsultation.title")}
                </h3>
                <p className="text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                  {t("care.features.digitalConsultation.desc")}
                </p>
              </div>
            </div>

            <div className="bg-white md:min-w-[unset] sm:h-[26.25rem] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-5 flex flex-col gap-2 overflow-hidden">
              <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-['Work_Sans'] leading-[135%]">
                {t("care.features.templateDropdown.title")}
              </h3>
              <p className="text-base text-[#555] tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                {t("care.features.templateDropdown.desc")}
              </p>
              <div className="relative  w-full flex justify-center h-full mx-auto">
                <img
                  src={
                    appLanguage === "sv" ? templateDropdownSv : templateDropdown
                  }
                  alt={t("care.features.templateDropdown.alt")}
                  className="-bottom-7 w-full object-contain relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Care;

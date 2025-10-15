import { useEffect } from "react";
import { digitalConsultation, fastAccess, heroPatient, patientNeed1, patientNeed2, patientNeed3, patientNeed4, patientNeed5, templateDropdown } from "../assets";
import { Button, Contact, Faq, StakeHolder, Steps } from "../components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAppLanguage } from "../store/slices/generalSlice";
import type { RootState } from "../store/store";

function ForPatients() {
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
      <section className="w-full min-h-screen px-5 md:px-20 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24 max-w-full flex md:flex-row flex-col">
        <div className="w-full flex flex-col justify-start items-center md:items-start gap-6 md:gap-8 lg:gap-12 max-w-[700px] mx-auto">
          <div className="flex flex-col justify-start md:items-start items-center gap-3 md:gap-4 w-full">
            <h2 className="w-full text-center md:text-left text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%] max-w-[632px]">
              {t("forPatients.hero.title")}
            </h2>
            <p className="w-full text-center md:text-left text-[#555] text-base tracking-wider sm:text-lg lg:text-xl font-light font-['Work_Sans'] leading-[135%]">
              {t("forPatients.hero.desc")}
            </p>
          </div>
          <Button>
            <a
              href="https://calendly.com/prevhealth/30min"
              target="_blank"
              className="tracking-wider"
            >
              {t("forPatients.hero.button")}
            </a>
          </Button>
        </div>
        <div className="w-full max-w-full md:min-w-[unset]  min-w-screen relative -left-5 md:left-[unset] md:pt-0 pt-18">
          <img
            src={heroPatient}
            alt={t("forPatients.hero.title")}
            className="w-full relative mx-auto md:block hidden max-w-[1093px]"
            style={{
              filter: "drop-shadow(8px 8px 20px rgba(0,0,0,0.5))",
            }}
          />
          <img
            src={heroPatient}
            alt={t("forPatients.hero.title")}
            className="w-[calc(100vw+64px)] left-4 relative md:hidden"
            style={{
              filter: "drop-shadow(8px 8px 20px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col items-center gap-12 md:px-20 px-5 md:py-24 py-16">
        <div className="w-full max-w-[933px] flex flex-col items-center gap-2.5">
          <div className="rounded-[10px] inline-flex items-center gap-2">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
            <span className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forPatients.whatPatientsGetSection.subTitle")}
            </span>
          </div>
          <h2 className="w-full max-w-[759px] pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
            {t("forPatients.whatPatientsGetSection.title")}
          </h2>
          <p className="w-full text-center text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("forPatients.whatPatientsGetSection.desc")}
          </p>
        </div>
        <div className="w-full md:grid flex flex-col md:gap-x-4 md:gap-y-5 gap-10 grid-cols-3 grid-rows-5">
          <div className="w-full h-full row-start-1 row-end-4 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <div className="w-full bg-[#FAFAFA] rounded-[12px] md:p-8 p-5">
              <img
                src={templateDropdown}
                alt={t(
                  "forPatients.whatPatientsGetSection.features.regionService.alt"
                )}
                className="max-w-full mx-auto"
              />
            </div>
            <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.regionService.title"
              )}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.regionService.desc"
              )}
            </div>
          </div>
          <div className="w-full h-full row-start-1 row-end-3 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <img
              src={patientNeed1}
              alt={t(
                "forPatients.whatPatientsGetSection.features.regionService.alt"
              )}
              className="max-w-full mx-auto rounded-[10px]"
            />
            <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.aiClinicalNotes.title"
              )}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.aiClinicalNotes.desc"
              )}
            </div>
          </div>
          <div className="w-full h-full row-start-1 row-end-4 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <div className="w-full md:p-14 bg-white/10 backdrop-blur-[80px] p-6 rounded-[10px]">
              <img
                src={patientNeed2}
                alt={t(
                  "forPatients.whatPatientsGetSection.features.regionService.alt"
                )}
                className="max-w-full mx-auto"
              />
            </div>
            <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.smartIntake.title"
              )}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.smartIntake.desc"
              )}
            </div>
          </div>
          <div className="w-full h-full row-start-4 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <img
              src={patientNeed3}
              alt={t(
                "forPatients.whatPatientsGetSection.features.regionService.alt"
              )}
              className="max-w-full mx-auto rounded-[10px]"
            />

            <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.voiceNotes.title"
              )}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forPatients.whatPatientsGetSection.features.voiceNotes.desc")}
            </div>
          </div>
          <div className="w-full h-full row-start-3 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <div className="w-full md:px-16 px-12 bg-[#FAFAFA] pt-4 rounded-[10px]">
              <img
                src={patientNeed4}
                alt={t(
                  "forPatients.whatPatientsGetSection.features.regionService.alt"
                )}
                className="max-w-full mx-auto "
              />
            </div>

            <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.resourceSharing.title"
              )}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.resourceSharing.desc"
              )}
            </div>
          </div>
          <div className="w-full h-full row-start-4 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
            <img
              src={patientNeed5}
              alt={t(
                "forPatients.whatPatientsGetSection.features.regionService.alt"
              )}
              className="max-w-full mx-auto rounded-[10px]"
            />

            <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.groupSession.title"
              )}
            </h3>
            <div className="w-full justify-start text-[#545454] text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t(
                "forPatients.whatPatientsGetSection.features.groupSession.desc"
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:min-h-screen flex flex-col items-center gap-12 md:px-20 px-5 md:py-24">
        <div
          className={`w-full ${
            appLanguage === "de" ? "max-w-[33rem]" : "max-w-[27rem] "
          } flex flex-col items-center gap-2.5`}
        >
          <div className="rounded-[10px] inline-flex items-center gap-2">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
            <span className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
              {t("forPatients.careWithoutComplicationsSection.subTitle")}
            </span>
          </div>
          <h2
            className={`w-full ${
              appLanguage === "de" ? "max-w-[33rem]" : "max-w-[23rem] "
            }  mx-auto pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]`}
          >
            {t("forPatients.careWithoutComplicationsSection.title")}
          </h2>
          <p className="w-full text-center text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("forPatients.careWithoutComplicationsSection.desc")}
          </p>
        </div>

        <div className="w-full max-w-[1280px]">
          <div className="w-full pb-4 md:pb-0 overflow-x-auto md:overflow-x-visible scrollbar-hide">
            <div className="w-max md:w-full grid grid-cols-3 gap-4">
              <div className="w-[300px] md:w-full flex flex-col gap-4  py-4">
                <div className="w-full rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] h-[295px] flex justify-center items-center">
                  <img
                    src={fastAccess}
                    alt={t(
                      "forPatients.careWithoutComplicationsSection.features.chooseNeed.alt"
                    )}
                    className="max-w-full max-h-[290px]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                    {t(
                      "forPatients.careWithoutComplicationsSection.features.chooseNeed.title"
                    )}
                  </h3>
                  <p className="text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                    {t(
                      "forPatients.careWithoutComplicationsSection.features.chooseNeed.desc"
                    )}
                  </p>
                </div>
              </div>

              <div className="w-[300px] md:w-full flex flex-col gap-4  py-4">
                <div className="w-full rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] lg:py-9 lg:px-18 p-8 h-[295px] flex justify-center items-center">
                  <img
                    src={patientNeed2}
                    alt={t(
                      "forPatients.careWithoutComplicationsSection.features.shareSymptoms.alt"
                    )}
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                    {t(
                      "forPatients.careWithoutComplicationsSection.features.shareSymptoms.title"
                    )}
                  </h3>
                  <p className="text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                    {t(
                      "forPatients.careWithoutComplicationsSection.features.shareSymptoms.desc"
                    )}
                  </p>
                </div>
              </div>

              <div className="w-[300px] md:w-full flex flex-col gap-4  py-4">
                <div className="w-full p-8 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] h-[295px] flex justify-center items-center">
                  <img
                    src={digitalConsultation}
                    alt={t(
                      "forPatients.careWithoutComplicationsSection.features.connectDoctor.alt"
                    )}
                    className="w-full max-w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                    {t(
                      "forPatients.careWithoutComplicationsSection.features.connectDoctor.title"
                    )}
                  </h3>
                  <p className="text-[#545454] text-sm md:text-base lg:text-xl tracking-wider font-light font-['Work_Sans'] leading-[135%]">
                    {t(
                      "forPatients.careWithoutComplicationsSection.features.connectDoctor.desc"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button>
          <a
            href="https://calendly.com/prevhealth/30min"
            target="_blank"
            className="tracking-wider"
          >
            {t("forPatients.careWithoutComplicationsSection.button")}
          </a>
        </Button>
      </section>
      <Steps />
      <StakeHolder appLanguage={appLanguage} />
      <Faq />
      <Contact />
    </div>
  );
}

export default ForPatients;
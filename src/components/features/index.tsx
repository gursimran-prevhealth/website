import { useTranslation } from "react-i18next";
import {
  feat1,
  feat2,
  feat3,
  feat4,
  feat5,
  feat6,
  feat7,
  feat8,
  feat9,
} from "../../assets";
import type { CareProps } from "../../lib/consts";

// const featureData = [
//     {
//         title: "Quick Service Selection",
//         desc: "Choose your location and care type (e.g., Primary Care, Psychiatry, Gynaecology) in just a few taps.",
//         img: feat1,
//     },
//     {
//         title: "Centralized Dashboard",
//         desc: "Access all transcriptions & medical notes in one place, streamlining documentation & saving time.",
//         img: feat2,
//     },
//     {
//         title: "AI-Powered Clinical Notes",
//         desc: "Real-time transcription & intelligent summarization of consults, no more manual note-taking.",
//         img: feat3,
//     },
//     {
//         title: "Smart Dictation",
//         desc: "Just speak into a blank template after your consultation, and Clinvvo takes care of the rest.",
//         img: feat4,
//     },
//     {
//         title: "Diagnosis Codes",
//         desc: "Clinvvo suggests relevant codes as you speak or type, so you can focus on care, not coding.",
//         img: feat5,
//     },
//     {
//         title: "AI Speech Recognition",
//         desc: "Dictate freely or directly into fields, Clinvvo transcribes it all with built-in speech recognition.",
//         img: feat6,
//     },
//     {
//         title: "Automatic Clinical Language",
//         desc: "Say it your way, Clinvvo translates it into clear, professional clinical phrasing automatically.",
//         img: feat7,
//     },
//     {
//         title: "One Click Transfer",
//         desc: "Once your medical note is ready, Clinvvo seamlessly transfer it to your medical journal system.",
//         img: feat8,
//     },
//     {
//         title: "Text Input",
//         desc: "Use existing notes to auto-generate structured clinical documents.",
//         img: feat9,
//     },
// ];

interface FeatureItem {
  title: string;
  desc: string;
}
export default function Features({ appLanguage }: CareProps) {
  const { t } = useTranslation();
  const featureData = t("features.list", {
    returnObjects: true,
  }) as FeatureItem[];
  const images = [
    feat1,
    feat2,
    feat3,
    feat4,
    feat5,
    feat6,
    feat7,
    feat8,
    feat9,
  ];
  return (
    <div className="w-full px-4 max-w-[998px] mx-auto md:py-24 py-16 flex flex-col items-center gap-8 md:gap-10 lg:gap-12 min-h-screen">
      <div
        className={`w-full ${
          appLanguage == "de" ? "max-w-[47rem]" : "max-w-[38.5rem]"
        }  flex flex-col items-center gap-2 md:gap-3`}
      >
        <div className="py-1 rounded-[10px] inline-flex items-center gap-2">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
          <span className="text-[#555] text-sm md:text-base tracking-wider font-normal font-['Work_Sans'] leading-[135%]">
            {t("features.sectionTag")}
          </span>
        </div>
        <h2 className="w-full text-center text-[#23586A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
          {t("features.sectionTitle")}
        </h2>
      </div>
      <div className="w-full px-5 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {featureData?.map((item: FeatureItem, index: number) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-[1.5px_1.5px_3px_0px_rgba(174,174,192,0.40)] transition-all duration-200 border-[1px] border-[transparent] outline-[0.5px] outline-neutral-100 p-4 md:p-6 flex flex-col gap-3"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img src={images[index]} alt={item.title} />
            </div>
            <h3 className="text-[#23586A] text-lg md:text-xl font-medium font-['Work_Sans'] leading-[135%]">
              {item.title}
            </h3>
            <p className="text-[#555] text-sm md:text-base font-light tracking-wider font-['Work_Sans'] leading-[135%]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

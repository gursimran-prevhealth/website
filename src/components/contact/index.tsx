import { Link } from "react-router-dom";
import { contactBanner, contactBannerSv } from "../../assets";
import { useTranslation } from "react-i18next";
import type { CareProps } from "../../lib/consts";

function Contact({ appLanguage }: CareProps) {
  const { t } = useTranslation();
  return (
    <section className="w-full px-5 sm:pb-32 pb-14 pt-8 sm:min-h-screen">
      <div className="sm:px-0 px-5 w-full">
        <img
          src={appLanguage === "sv" ? contactBannerSv : contactBanner}
          alt="Contact Banner"
          className="max-w-[908px] w-full flex-shrink-0 rounded-[20px] shadow-[-25px_125px_150px_0_rgba(0,0,0,0.25)] mx-auto"
        />
      </div>
      <div className="w-full max-w-[1400px] mx-auto bg-cyan-900 rounded-xl overflow-hidden p-8 md:p-16 md:min-h-64 flex flex-col md:flex-row justify-between md:items-center items-start gap-8 -mt-12 md:-mt-40 relative z-[1]">
        <h2 className="text-white text-3xl md:text-5xl font-medium font-[Lora] leading-10 md:leading-[64.80px]">
          {t("footer.title")}
          <br />
          {t("footer.subtitle")}
        </h2>
        <Link
          to={"/contact-us"}
          className="bg-white cursor-pointer text-[#23586A] text-sm md:text-base tracking-wider font-medium font-[Work_Sans] leading-tight md:leading-snug px-6 py-3.5 md:px-8 md:py-4 rounded-[48px] hover:bg-cyan-50 transition-colors duration-200"
        >
          {t("footer.button")}
        </Link>
      </div>
    </section>
  );
}

export default Contact;
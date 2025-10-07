import { useEffect, useRef, useState } from 'react';
import { customize, demo, rocket, support } from '../../assets';
import { useTranslation } from "react-i18next";

const Steps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerBottom = container.getBoundingClientRect().bottom;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const visibleHeight = viewportHeight - containerTop;
      const scrollPercentage = Math.min(
        1,
        Math.max(0, visibleHeight / containerHeight)
      );

      setProgress(
        (containerRef.current?.clientHeight || 0) * scrollPercentage -
          (containerBottom < window.innerHeight / 2
            ? 0
            : window.innerHeight / 2)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full flex flex-col items-center gap-12 md:px-20 px-5 md:py-24 py-16 min-h-screen">
      <div className="w-full max-w-[475px] flex flex-col items-center gap-2.5">
        <div className="rounded-[10px] inline-flex items-center gap-2">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
          <span className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[135%]">
            {t("steps.subTitle")}
          </span>
        </div>
        <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
          {t("steps.title")}
        </h2>
      </div>

      <div
        className="w-full flex flex-col lg:gap-8 gap-18 max-w-[1258px] mx-auto relative"
        ref={containerRef}
      >
        <div className="h-full absolute lg:block hidden w-1 rounded-[20px] top-0 left-1/2 -translate-x-1/2 bg-[#D9D9D9] overflow-hidden">
          <div
            className="w-full bg-[#23586A] rounded-[20px] transition-all duration-300"
            style={{
              height: `${progress}px`,
              position: "absolute",
              top: 0,
            }}
          ></div>
        </div>
        <div className="w-full flex justify-between gap-8">
          <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
            <div className="w-12 h-12 relative">
              <img
                src={demo}
                alt="Demo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                <div className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                  {t("steps.stepsList.demo.tag")}
                </div>
              </div>
              <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                {t("steps.stepsList.demo.title")}
              </h2>
            </div>
            <p className="w-full text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
              {t("steps.stepsList.demo.desc")}
            </p>
          </div>
          <div className="w-full max-w-[524px] lg:block hidden"></div>
        </div>
        <div className="w-full flex justify-between gap-8">
          <div className="w-full max-w-[524px] lg:block hidden"></div>
          <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
            <div className="w-12 h-12 relative">
              <img
                src={customize}
                alt={t("steps.stepsList.customize.tag")}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                <div className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                  {t("steps.stepsList.customize.tag")}
                </div>
              </div>
              <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                {t("steps.stepsList.customize.title")}
              </h2>
            </div>
            <p className="w-full text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
              {t("steps.stepsList.customize.desc")}
              <br />• {t("steps.stepsList.customize.points.list-1")}
              <br />• {t("steps.stepsList.customize.points.list-2")}
              <br />• {t("steps.stepsList.customize.points.list-3")}
              <br />• {t("steps.stepsList.customize.points.list-4")}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between gap-8">
          <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
            <div className="w-12 h-12 relative">
              <img
                src={rocket}
                alt="Rocket"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                <div className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                  {t("steps.stepsList.launch.tag")}
                </div>
              </div>
              <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                {t("steps.stepsList.launch.title")}
              </h2>
            </div>
            <p className="w-full text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
              {t("steps.stepsList.launch.desc")}
              <br />
              {t("steps.stepsList.launch.points.list-1")}
              <br />
              {t("steps.stepsList.launch.points.list-2")}
              <br />
              {t("steps.stepsList.launch.points.list-3")}
            </p>
          </div>
          <div className="w-full max-w-[524px] lg:block hidden"></div>
        </div>
        <div className="w-full flex justify-between gap-8">
          <div className="w-full max-w-[524px] lg:block hidden"></div>
          <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
            <div className="w-12 h-12 relative">
              <img
                src={support}
                alt="Support"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                <div className="text-[#545454] text-sm md:text-base tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
                  {t("steps.stepsList.support.tag")}
                </div>
              </div>
              <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                {t("steps.stepsList.support.title")}
              </h2>
            </div>
            <p className="w-full text-[#545454] text-lg md:text-xl tracking-wider font-light font-['Work_Sans'] leading-[1.35]">
              {t("steps.stepsList.support.desc")}
              <br />
              {t("steps.stepsList.support.points.list-1")}
              <br />
              {t("steps.stepsList.support.points.list-2")}
              <br />
              {t("steps.stepsList.support.points.list-3")} <br />
              {t("steps.stepsList.support.points.list-4")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
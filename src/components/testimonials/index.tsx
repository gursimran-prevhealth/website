import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useCallback, useState } from "react";
import SwiperCore from "swiper";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  testimonial,
  testimonialPerson1,
  testimonialPerson2,
} from "../../assets";
import { useTranslation } from "react-i18next";

interface Testimonial {
  name: string;
  quote: string;
  role?: string;
  desc?: string;
}

const Testimonials = () => {
  const { t } = useTranslation();

  const rawTestimonials = t("testimonials.list", { returnObjects: true });
  const testimonials: Testimonial[] = Array.isArray(rawTestimonials)
    ? rawTestimonials
    : [];
  const images = [testimonialPerson2, testimonialPerson1];
  const image = testimonial;
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const handleNext = useCallback(() => {
    if (!swiperInstance) return;

    const totalSlides = testimonials.length;

    if (swiperInstance.activeIndex === totalSlides - 1) {
      swiperInstance.slideTo(0);
    } else {
      swiperInstance.slideNext();
    }
  }, [swiperInstance, testimonials.length]);

  const handlePrevious = useCallback(() => {
    if (!swiperInstance) return;

    const totalSlides = testimonials.length;

    if (swiperInstance.activeIndex === 0) {
      swiperInstance.slideTo(totalSlides - 1);
    } else {
      swiperInstance.slidePrev();
    }
  }, [swiperInstance, testimonials.length]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-12  md:mt-36 flex flex-col items-center gap-8 md:gap-12 min-h-screen">
      <div className="w-full max-w-[900px] flex flex-col items-center gap-3 md:gap-4 text-center">
        <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
          <span className="text-sm md:text-base text-[#555] tracking-wider font-light font-[Work_Sans] leading-[135%]">
            {t("testimonials.sectionTag")}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%] w-full">
          {t("testimonials.sectionTitle")}
        </h2>
        <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-[Work_Sans] leading-[135%] max-w-[657px]">
          {t("testimonials.sectionDesc")}
        </p>
      </div>
      <div className="w-full h-auto md:h-[27rem] sm:px-4">
        {/* <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 56,
            },
          }}
          className="w-full h-full"
        >
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <SwiperSlide key={testimonial.name} className="h-full ">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8 items-center h-full">
                <div className="w-full lg:w-[43%]">
                  <img
                    src={image}
                    alt={testimonial.name}
                    className="w-full h-64 md:h-[26rem] object-cover rounded-[20px]"
                  />
                </div>
                <div className="w-full lg:w-[57%] flex flex-col gap-6 md:gap-8 h-full md:h-[26rem] bg-white shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] px-8 rounded-[20px] py-10">
                  <p className="text-base md:text-xl text-[#555] tracking-wider font-light font-[Work_Sans] leading-[135%]">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-zinc-300 rounded-full overflow-hidden">
                      <img
                        src={images[index]}
                        className="size-full object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg text-[#555] tracking-wider font-light font-[Work_Sans] leading-[135%]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm md:text-base text-[#555] tracking-wider font-light font-[Work_Sans] leading-[135%]">
                        {testimonial.role}
                      </p>
                      <p className="text-sm md:text-base text-[#555] tracking-wider font-light font-[Work_Sans] leading-[135%]">
                        {testimonial.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8 items-center h-full">
          <div className="w-full lg:w-[43%]">
            <img
              src={testimonial}
              alt="testimonial"
              className="w-full h-64 md:h-[26rem] object-cover rounded-[20px]"
            />
          </div>
          <div className="w-full lg:w-[57%] h-full">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              className="w-full h-full"
            >
              {testimonials.map((testimonial: Testimonial, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-6 md:gap-8 h-full bg-white shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] px-8 rounded-[20px] py-10">
                    <p className="text-base md:text-xl text-[#555] font-light">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-zinc-300 rounded-full overflow-hidden">
                        <img
                          src={images[index]}
                          className="size-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg text-[#555]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#555]">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-[#555]">
                          {testimonial.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex relative justify-start items-center gap-2.5 lg:-mt-8 mt-8 lg:pl-14  z-[1] lg:w-[57%] lg:ml-auto">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideTo(index)}
              className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${
                index === activeIndex
                  ? "w-[60px] bg-[#23586A]"
                  : "w-10 bg-[#D9D9D9]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
          <div className="absolute right-1  md:right-7 -bottom-4 sm:-bottom-1 flex gap-2">
            <button
              onClick={handlePrevious}
              className="group w-10 h-10 md:w-14 md:h-14 bg-white hover:bg-gray-50 transition-colors duration-500 rounded-full border-[0.5px] border-gray-200 p-1 flex justify-center items-center cursor-pointer"
            >
              <ArrowBackIosSharpIcon className="text-[#AFAFAF] group-hover:text-[#AFAFAF] hover:text-[#23586A] transition-colors duration-500" />
            </button>

            <button
              onClick={handleNext}
              className="group w-10 h-10 md:w-14 md:h-14 bg-white hover:bg-gray-50 transition-colors duration-500 rounded-full border-[0.5px] border-gray-200 p-1 flex justify-center items-center cursor-pointer"
            >
              <ArrowForwardIosSharpIcon className="text-[#AFAFAF] group-hover:text-[#AFAFAF] hover:text-[#23586A] transition-colors duration-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import SwiperCore from 'swiper';
import { testimonial, testimonialPerson1 } from '../../assets';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    const testimonials = [
        {
            id: 1,
            quote: "Clinvvo’s system and app have revolutionized our workflow and significantly enhanced the patient experience. It has simplified patient contact for our midwives and doctors, leading to substantial cost savings for our organization. Thanks to Clinvvo’s solution, our operations are more efficient and effective.",
            name: "Hugo Lewné",
            role: "CEO, Barnmorskegruppen Mama Mia AB",
            image: testimonial
        },
        // {
        //     id: 2,
        //     quote: "Clinvvo’s system and app have revolutionized our workflow and significantly enhanced the patient experience. It has simplified patient contact for our midwives and doctors, leading to substantial cost savings for our organization. Thanks to Clinvvo’s solution, our operations are more efficient and effective.",
        //     name: "Second Person",
        //     role: "Their Role",
        //     image: testimonial
        // },
        // {
        //     id: 3,
        //     quote: "Clinvvo’s system and app have revolutionized our workflow and significantly enhanced the patient experience. It has simplified patient contact for our midwives and doctors, leading to substantial cost savings for our organization. Thanks to Clinvvo’s solution, our operations are more efficient and effective.",
        //     name: "Third Person",
        //     role: "Their Position",
        //     image: testimonial
        // }
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-12 flex flex-col items-center gap-8 md:gap-12 min-h-screen">
            <div className="w-full max-w-[657px] flex flex-col items-center gap-3 md:gap-4 text-center">
                <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                    <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                        TESTIMONIALS
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">
                    From Those Who Use It Daily
                </h2>
                <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                    See how we're making care easier, faster, and more human directly from those who've felt the difference
                </p>
            </div>
            <div className="w-full">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 56
                        }
                    }}
                    className="w-full"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className='h-full'>
                            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-14 items-center h-full">
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-64 md:h-96 object-cover rounded-[20px]"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 h-full">
                                    <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                        {testimonial.quote}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-zinc-300 rounded-full overflow-hidden" >
                                            <img src={testimonialPerson1} className='size-full object-cover' alt="" />
                                            </div>
                                        <div>
                                            <h4 className="text-base md:text-lg text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-start items-center gap-2.5 lg:-mt-8 mt-8 lg:pl-7 relative z-[1] lg:w-1/2 lg:ml-auto">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperInstance?.slideTo(index)}
                            className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${index === activeIndex
                                ? 'w-[60px] bg-[#23586A]'
                                : 'w-10 bg-[#D9D9D9]'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

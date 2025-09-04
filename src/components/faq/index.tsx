import { useState, useRef, useEffect } from "react";
import { cross } from "../../assets";
import { faqData } from "../../lib/const";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [heights, setHeights] = useState<number[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // measure all heights after mount
        const newHeights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
        setHeights(newHeights);
    }, [faqData]);

    const toggleFaq = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="w-full px-5 md:py-24 pt-12 pb-12 sm:min-h-screen">
            <div className="w-full max-w-[868px] mx-auto flex flex-col items-center gap-10 md:gap-14">
                {/* Header */}
                <div className="w-full max-w-[582px] flex flex-col items-center gap-3 md:gap-4">
                    <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                        <div className="w-2.5 h-2.5 bg-[#FD8883] rounded-full" />
                        <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-tight md:leading-snug">
                            FAQS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-10 md:leading-[62.40px] text-center">
                        Your Questions Answered
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="w-full flex flex-col gap-2 md:gap-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer"
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="flex flex-col gap-2 md:gap-3 py-3 md:py-4">
                                {/* Header Row */}
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="flex-1 text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-snug md:leading-7">
                                        {item.question}
                                    </h3>
                                    <img
                                        src={cross}
                                        alt="toggle"
                                        className={`w-5 h-5 md:w-8 md:h-8 transition-transform duration-300 ${
                                            openIndex === index ? "" : "rotate-45"
                                        }`}
                                    />
                                </div>

                                {/* Expanding Answer */}
                                <div
                                    ref={(el) => {
                                        contentRefs.current[index] = el;
                                    }}
                                    className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                                    style={{
                                        maxHeight: openIndex === index ? `${heights[index]}px` : "0px",
                                    }}
                                >
                                    <p className="mt-1 md:mt-2 text-base md:text-xl text-zinc-500 font-normal font-[Work_Sans] leading-snug md:leading-7">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            {index < faqData.length - 1 && (
                                <div className="w-full h-px bg-neutral-100" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

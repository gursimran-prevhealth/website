import { useEffect, useRef, useState } from 'react';
import { customize, demo, rocket, support } from '../../assets';

const Steps = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

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

            setProgress(((containerRef.current?.clientHeight || 0) * scrollPercentage) - (containerBottom < (window.innerHeight / 2) ? 0 : window.innerHeight / 2));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section className="w-full flex flex-col items-center gap-12 md:px-20 px-5 md:py-24 py-16 min-h-screen">
            <div className="w-full max-w-[475px] flex flex-col items-center gap-2.5">
                <div className="rounded-[10px] inline-flex items-center gap-2">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
                    <span className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[135%]">
                        STEP BY STEP PROCESS
                    </span>
                </div>
                <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
                    Delivered from Demo to Live
                </h2>
            </div>

            <div className="w-full flex flex-col lg:gap-8 gap-18 max-w-[1258px] mx-auto relative" ref={containerRef}>
                <div className="h-full absolute lg:block hidden w-1 rounded-[20px] top-0 left-1/2 -translate-x-1/2 bg-[#D9D9D9] overflow-hidden">
                    <div
                        className="w-full bg-[#23586A] rounded-[20px] transition-all duration-300"
                        style={{
                            height: `${progress}px`,
                            position: 'absolute',
                            top: 0,
                        }}
                    ></div>
                </div>
                <div className="hidden w-full lg:flex justify-between gap-8">
                    <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
                        <div className="w-12 h-12 relative">
                            <img src={demo} alt="Demo" className="w-full h-full object-contain" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                                <div className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[1.35]">
                                    BOOK A DEMO
                                </div>
                            </div>
                            <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                                Let's start with a conversation
                            </h2>
                        </div>
                        <p className="w-full text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                            You tell us what your organization needs, from specialties and languages to branding and workflows. We'll walk you through our product suite and show how it fits your goals.
                        </p>
                    </div>
                    <div className="w-full max-w-[524px] lg:block hidden"></div>
                </div>
                <div className="hidden w-full lg:flex justify-between gap-8">
                    <div className="w-full max-w-[524px] lg:block hidden"></div>
                    <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
                        <div className="w-12 h-12 relative">
                            <img src={customize} alt="Customize" className="w-full h-full object-contain" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                                <div className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[1.35]">
                                    CUSTOMIZE & CONFIGURE
                                </div>
                            </div>
                            <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                                Tailored to your care model
                            </h2>
                        </div>
                        <p className="w-full text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                            Select the services you want to offer, such as Primary Care, BMM, or Sexual Health and we'll help you configure everything to match. From patient intake forms and communication mechanisms to triage workflows, your setup is fully customizable.You decide: <br /> • Specialties & services <br /> • Patient flows & intake forms <br /> • Clinical documentation workflows <br /> • Region and language preferences
                        </p>
                    </div>
                </div>
                <div className="hidden w-full lg:flex justify-between gap-8">
                    <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
                        <div className="w-12 h-12 relative">
                            <img src={rocket} alt="Rocket" className="w-full h-full object-contain" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                                <div className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[1.35]">
                                    WE BRAND & LAUNCH IT
                                </div>
                            </div>
                            <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                                We build it, You own the experience
                            </h2>
                        </div>
                        <p className="w-full text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                            We white-label the platform with your logo, colors, domain, and service structure. Your teams receive onboarding and training — then you're ready to go live. Includes:
                            <br /> • Branded interface & domain
                            <br /> • Team onboarding & support
                            <br /> • Optional integrations
                        </p>
                    </div>
                    <div className="w-full max-w-[524px] lg:block hidden"></div>
                </div>
                <div className="hidden w-full lg:flex justify-between gap-8">
                    <div className="w-full max-w-[524px] lg:block hidden"></div>
                    <div className="w-full max-w-[524px] flex flex-col gap-4 items-start">
                        <div className="w-12 h-12 relative">
                            <img src={support} alt="Support" className="w-full h-full object-contain" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                                <div className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[1.35]">
                                    ONGOING SUPPORT & UPGRADES
                                </div>
                            </div>
                            <h2 className="w-full text-[#23586a] text-2xl md:text-3xl font-medium font-['Lora'] leading-[1.35]">
                                We stay with you, Always
                            </h2>
                        </div>
                        <p className="w-full text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                            You get 24/7 technical support, compliance monitoring, and continuous feature upgrades — so your care stays modern, secure, and efficient. What we manage:
                            <br /> • Hosting & updates
                            <br /> • AI features & platform upgrades
                            <br /> • Compliance & data security
                            <br /> • Fast-response support
                        </p>
                    </div>
                </div>
                <div className="w-full pb-4 md:pb-0 overflow-x-auto scrollbar-hide">
                    <div className="w-max lg:hidden grid grid-cols-4 gap-4">
                        <div className="w-[322px] max-lg:h-[292px] flex justify-between gap-8 py-8 px-4 rounded-2xl shadow-lg">
                            <div className="w-full flex flex-col gap-4 items-start">
                                <div className="w-12 h-12 relative">
                                    <img src={demo} alt="Demo" className="w-full h-full object-contain" />
                                </div>
                                <div className="w-full flex flex-col items-start gap-2">
                                    <h2 className="w-full text-[#23586a] text-2xl font-medium font-['Lora'] leading-[1.35]">
                                        BOOK A DEMO
                                    </h2>
                                </div>
                                <p className="w-full text-[#545454] text-lg max-lg:line-clamp-3 font-normal font-['Work_Sans'] leading-[1.35]">
                                    You tell us what your organization needs, from specialties and languages to branding and workflows. We'll walk you through our product suite and show how it fits your goals.
                                </p>
                            </div>
                            <div className="w-full lg:block hidden"></div>
                        </div>
                        <div className="w-[322px] max-lg:h-[292px] flex justify-between gap-8 py-8 px-4 rounded-2xl shadow-lg">
                            <div className="w-full flex flex-col gap-4 items-start">
                                <div className="w-12 h-12 relative">
                                    <img src={customize} alt="Customize" className="w-full h-full object-contain" />
                                </div>
                                <div className="w-full flex flex-col items-start gap-2">
                                    <h2 className="w-full text-[#23586a] text-2xl font-medium font-['Lora'] leading-[1.35]">
                                        CUSTOMIZE & CONFIGURE
                                    </h2>
                                </div>
                                <p className="w-full text-[#545454] text-lg line-clamp-3 font-normal font-['Work_Sans'] leading-[1.35]">
                                    Select the services you want to offer, such as Primary Care, BMM, or Sexual Health and we'll help you configure everything to match. From patient intake forms and communication mechanisms to triage workflows, your setup is fully customizable.You decide: <br /> • Specialties & services <br /> • Patient flows & intake forms <br /> • Clinical documentation workflows <br /> • Region and language preferences
                                </p>
                            </div>
                        </div>
                        <div className="w-[322px] max-lg:h-[292px] flex justify-between gap-8 py-8 px-4 rounded-2xl shadow-lg">
                            <div className="w-full flex flex-col gap-4 items-start">
                                <div className="w-12 h-12 relative">
                                    <img src={rocket} alt="Rocket" className="w-full h-full object-contain" />
                                </div>
                                <div className="w-full flex flex-col items-start gap-2">
                                    <h2 className="w-full text-[#23586a] text-2xl font-medium font-['Lora'] leading-[1.35]">
                                        WE BRAND & LAUNCH IT
                                    </h2>
                                </div>
                                <p className="w-full text-[#545454] text-lg line-clamp-3 font-normal font-['Work_Sans'] leading-[1.35]">
                                    We white-label the platform with your logo, colors, domain, and service structure. Your teams receive onboarding and training — then you're ready to go live. Includes:
                                    <br /> • Branded interface & domain
                                    <br /> • Team onboarding & support
                                    <br /> • Optional integrations
                                </p>
                            </div>
                            <div className="w-full lg:block hidden"></div>
                        </div>
                        <div className="w-[322px] max-lg:h-[292px] flex justify-between gap-8 py-8 px-4 rounded-2xl shadow-lg">
                            <div className="w-full flex flex-col gap-4 items-start">
                                <div className="w-12 h-12 relative">
                                    <img src={support} alt="Support" className="w-full h-full object-contain" />
                                </div>
                                <div className="w-full flex flex-col items-start gap-2">
                                    <h2 className="w-full text-[#23586a] text-2xl font-medium font-['Lora'] leading-[1.35]">
                                        ONGOING SUPPORT & UPGRADES
                                    </h2>
                                </div>
                                <p className="w-full text-[#545454] text-lg line-clamp-3 font-normal font-['Work_Sans'] leading-[1.35]">
                                    You get 24/7 technical support, compliance monitoring, and continuous feature upgrades — so your care stays modern, secure, and efficient. What we manage:
                                    <br /> • Hosting & updates
                                    <br /> • AI features & platform upgrades
                                    <br /> • Compliance & data security
                                    <br /> • Fast-response support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
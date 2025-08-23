import { Link } from "react-router-dom";
import { aiPowered, charging, forPatient, forPatient1, hero, heroMobile, lens, smartCare, technology } from "../assets";
import { Care, Contact, Faq, Testimonials } from "../components";
import Button from "../components/button";

export default function Home() {
    return (
        <div className="w-full">
            <section className="relative w-full flex flex-col items-center gap-10 px-5 py-24 sm:px-10 sm:py-32 pb-0 sm:pb-0">
                <img src="blur.png" className="absolute w-full h-full -z-10" alt="" />
                <div className="flex flex-col items-center gap-5 max-w-[1023px]">
                    <h1 className="text-center text-[#23586A] font-medium font-[Lora] leading-[135%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        The Operating System for Modern Healthcare
                    </h1>
                    <p className="text-center text-[#555] font-normal font-[Work_Sans] text-base sm:text-lg md:text-xl leading-[135%] max-w-[975px]">
                        We’ve reimagined care to be smarter, faster, and more human. Clinvvo
                        provides the tools that help care teams stay connected and focused on
                        the patient, so care happens naturally, when and where it’s needed most.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <Button>
                        <a href="https://calendly.com/prevhealth/30min" target="_blank">Book a Demo</a>
                    </Button>
                </div>

            </section>
            <div className="home-image w-[80%] relative overflow-hidden min-h-[160px] mx-auto mt-8">
                <div className="absolute inset-0 bg-gray-300 animate-pulse w-full h-full"></div>
                <img
                    src={hero}
                    alt="Hero"
                    className="w-full object-cover relative bg-white hidden md:block"
                />
                <img
                    src={heroMobile}
                    alt="Hero"
                    className="w-full object-cover relative bg-white md:hidden"
                />
            </div>

            <div className="w-full max-w-[1560px] mx-auto md:min-h-[384px] min-h-[633px] bg-[#F7FDFF] overflow-hidden flex items-center justify-center p-6 pt-0">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-32">
                    <div className="max-w-64 w-full flex flex-col items-center gap-3">
                        <div className="text-7xl md:text-8xl font-semibold font-[Work_Sans] text-[#23586A] leading-[135%]">
                            x5
                        </div>
                        <div className="text-base md:text-xl font-normal font-[Work_Sans] text-[#555] leading-[135%] text-center">
                            Increase in Caregiver Productivity
                        </div>
                    </div>
                    <div className="max-w-72 w-full flex flex-col items-center gap-3">
                        <div className="text-7xl md:text-8xl font-semibold font-[Work_Sans] text-[#23586A] leading-[135%]">
                            500K+
                        </div>
                        <div className="text-base md:text-xl font-normal font-[Work_Sans] text-[#555] leading-[135%] text-center">
                            Patients served in First year of operations
                        </div>
                    </div>
                    <div className="max-w-64 w-full flex flex-col items-center gap-3">
                        <div className="text-7xl md:text-8xl font-semibold font-[Work_Sans] text-[#23586A] leading-[135%]">
                            &gt;40%
                        </div>
                        <div className="text-base md:text-xl font-normal font-[Work_Sans] text-[#555] leading-[135%] text-center">
                            Operating Cost Reduction
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full max-w-[1560px] mx-auto md:pt-[122px] md:pb-[70px] pb-[50px] pt-15 bg-white">
                <div className="w-full max-w-[937px] mx-auto flex flex-col items-center gap-3 md:gap-4 px-4">
                    <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                        <div className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-tight md:leading-snug">
                            CARE THAT WORKS FOR EVERYONE
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-10 md:leading-[62.40px] text-center">
                        Built for Doctors. Designed for Patients. Powered by Smart AI.
                    </h2>
                    <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-snug md:leading-7 text-center">
                        Whether you're treating patients or looking for care yourself, Clinvvo brings everything together in one place—faster consults, smarter tools, and tech that stays out of the way but keeps everything running smoothly
                    </p>
                </div>
            </section>
            <section className="w-full min-h-screen flex flex-col gap-24 md:px-20 px-5 max-w-[1560px] mx-auto pt-15 overflow-hidden">
                <div className="w-full flex lg:flex-row flex-col-reverse gap-6 h-full">
                    <div className="w-full h-full flex items-end justify-start mt-auto">
                        <div className="w-full lg:max-w-[579px] flex flex-col items-start gap-3 md:gap-4">
                            <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                                <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">FOR DOCTORS</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">Less Admin. More Time for Real Care.</h2>
                            <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%]">Clinvvo helps doctors focus on what matters. With AI-generated notes, smart intake summaries, and a unified dashboard, you can spend less time on administrative work and more time connecting with patients.</p>
                            <Button>
                                <Link to="/for-doctors">
                                    Explore More
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-end">
                        <img src={forPatient} alt="AI Powered" className="w-full" />
                    </div>
                </div>
                <div className="w-full flex lg:flex-row-reverse flex-col-reverse gap-6 h-full">
                    <div className="w-full h-full flex items-end justify-end mt-auto">
                        <div className="w-full lg:max-w-[579px] flex flex-col items-start gap-3 md:gap-4">
                            <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                                <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">FOR PATIENTS</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">Faster Answers. Happier Outcomes</h2>
                            <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%]">Clinvvo helps your patients get care without the friction - no crowded waiting rooms, no clunky intake. They choose their service, fill out a short guided form, and connect with your providers through secure chat, call, or video. Follow-ups and updates are built in, so they feel supported every step of the way.</p>
                            <Button>
                                <Link to="/for-patients">
                                    Explore More
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-end">
                        <img src={forPatient1} alt="AI Powered" className="w-full" />
                    </div>
                </div>
                <div className="w-full flex lg:flex-row flex-col-reverse gap-6 h-full">
                    <div className="w-full h-full flex items-end justify-start mt-auto">
                        <div className="w-full lg:max-w-[579px] flex flex-col items-start gap-3 md:gap-4">
                            <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                                <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">POWERED BY AI</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">AI That Listens & Lightens the Load</h2>
                            <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%]">Clinvvo's AI handles the busywork, transcribing consults, generating medical notes, transferring to EHR, so your clinicians can focus on care. For patients, it means faster appointments, fewer forms, and a more connected experience, all quietly powered behind the scenes.</p>
                            <Button>
                                <Link to="/ai-features">
                                    Explore More
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-end items-end md:-mr-20 -mr-5 md:w-[calc(100%+80px)] w-[calc(100%+20px)]">
                        <img src={aiPowered} alt="AI Powered" className="w-full" />
                    </div>
                </div>
            </section>
            <Care />
            <section className="w-full min-h-screen px-5 sm:px-10 lg:px-20 py-16 md:pb-24 md:pt-20 overflow-hidden max-w-[1560px] mx-auto">
                <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-20">
                    <div className="w-full lg:w-[613px] flex flex-col justify-start items-start gap-6 lg:gap-8">
                        <div className="flex flex-col justify-start items-start gap-4">
                            <div className="w-full lg:w-[524px] flex flex-col justify-start items-start gap-1">
                                <div className="py-0.5 rounded-[10px] inline-flex justify-center items-center gap-1">
                                    <div className="w-2.5 h-2.5 bg-[#FD8883] rounded-full" />
                                    <div className="text-center text-[#555] text-sm md:text-base font-normal font-['Work_Sans'] leading-tight md:leading-snug">WHO WE ARE</div>
                                </div>
                                <div className="text-[#23586A] text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-10 md:leading-[54px] lg:leading-[62.40px]">
                                    Smarter Care. Stronger Connections.
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-4">
                                <div className="text-[#555] text-base md:text-lg lg:text-xl font-normal font-['Work_Sans'] leading-snug md:leading-6 lg:leading-7">
                                    Clinvvo is a B2B SaaS platform built by European medical professionals and technologists who believe that better healthcare starts with better tools.
                                </div>
                                <div className="text-[#555] text-base md:text-lg lg:text-xl font-normal font-['Work_Sans'] leading-snug md:leading-6 lg:leading-7">
                                    We offer an end-to-end suite of features, from appointment booking and video consultations to AI-powered medical notes and EHR integration, that helps clinics digitize their services under their own brand.
                                </div>
                            </div>
                        </div>
                        <Button>
                            <Link to="/about">
                                More About Us
                            </Link>
                        </Button>
                    </div>

                    <div className="lg:w-[588px] relative md:w-full w-[calc(100vw-20px)] overflow-hidden md:right-0 -right-10">
                        <img
                            className="w-full h-full size-full"
                            src={smartCare}
                            alt="Clinvvo platform screenshot"
                        />

                    </div>
                </div>
            </section>
            <div className="w-full min-h-screen max-w-[1560px] mx-auto px-5 sm:px-10 lg:px-20 py-16 md:pb-24 md:pt-15 flex flex-col items-center gap-16 md:gap-18 ">
                <div className="w-full max-w-[609px] flex flex-col items-center gap-3 md:gap-4 text-center">
                    <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                        <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">OUR CORE VALUES</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">What Drives Us</h2>
                    <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                        At our core, we're here to bridge the gap between access and quality with modern care that works for everyone.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-18">
                    {[
                        {
                            icon: <img src={charging} alt="Efficiency that Empowers" className="w-11 h-16 " />,
                            title: "Efficiency that Empowers",
                            desc: "Freeing up doctor's time so they can focus on care, not clicks"
                        },
                        {
                            icon: <img src={lens} alt="Clarity for Patients" className="w-16 h-16 " />,
                            title: "Clarity for Patients",
                            desc: "Helping people navigate care with confidence and ease"
                        },
                        {
                            icon: (
                                <img src={technology} alt="Technology with a Purpose" className="w-20 h-20 " />
                            ),
                            title: "Technology with a Purpose",
                            desc: "Using smart systems that seamlessly enhance every interaction"
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 md:gap-4">
                            <div className="flex flex-col items-center gap-5 md:gap-9">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl text-[#23586A] font-medium font-[Lora] leading-[130%] text-center">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%] text-center">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Testimonials />

            <Faq />
            <Contact />
        </div>
    )
}

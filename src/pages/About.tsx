import { useEffect } from "react";
import { aboutDoctor, aboutPatient, ourmission, ourvision, work } from "../assets";
import { Contact } from "../components";

export default function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);
    return (
        <div className="w-full">
            <section className="w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24 max-w-[1440px] flex flex-col items-center gap-12 mx-auto">
                <div className="flex flex-col justify-center items-center gap-3 md:gap-4 w-full max-w-[980px]">
                    <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%] mx-auto">
                        Redefining Digital Healthcare Smarter, Faster, Human
                    </h2>
                    <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                        At Clinvvo, we believe healthcare should work for people, not the other way around. Our platform simplifies clinical workflows, speeds up documentation, and enhances the patient experience
                    </p>
                </div>
                <div className="w-full flex md:flex-row flex-col gap-3">
                    <img src={aboutPatient} alt="Patient Image" className="w-full md:rounded-bl-[60px] md:rounded-tl-[0px] rounded-tl-[60px]" />
                    <img src={aboutDoctor} alt="Doctor Image" className="w-full md:rounded-tr-[60px] md:rounded-br-[0px] rounded-br-[60px]" />
                </div>
            </section>
            <section className="w-full min-h-screen md:px-20 px-5 md:py-24 py-16 mx-auto flex flex-col items-center gap-16 max-w-[1440px]">
                <div className="w-full max-w-[900px] flex flex-col items-center gap-4 text-center">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
                            <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                            <div className="text-[#545454] text-base font-normal font-['Work_Sans'] leading-[1.35]">BUILT WITH PURPOSE</div>
                        </div>
                        <h1 className="w-full text-[#23586a] text-4xl md:text-5xl lg:text-6xl font-medium font-['Lora'] leading-[1.35]">
                            We're Committed to Empowering Better Care
                        </h1>
                    </div>
                    <p className="w-full max-w-[743px] text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                        We're here to make healthcare simpler and more human, for both busy clinicians and patients who need fast, trusted care
                    </p>
                </div>
                <div className="w-full min-h-[802px] grid md:grid-cols-2 grid-cols-1 xl:gap-24 lg:gap-20 md:gap-16 gap-12">
                    <div className="w-full flex flex-col gap-10">
                        <div className="w-full flex flex-col gap-4 max-w-[520px]">
                            <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                                <div className="text-[#545454] text-base font-normal font-['Work_Sans'] leading-[1.35]">OUR MISSION</div>
                            </div>
                            <p className="text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                                To build healthcare technology that empowers people, clinicians and patients alike, through intuitive tools, smart automation, and seamless workflows. We aim to reduce admin burden, improve care outcomes, and help healthcare professionals focus on what matters most: the human connection.
                            </p>
                        </div>
                        <img src={ourmission} alt="Our Mission" className="max-w-full w-full" />
                    </div>
                    <div className="w-full flex md:flex-col flex-col-reverse gap-10">
                        <img src={ourvision} alt="Our Vision" className="max-w-full w-full" />

                        <div className="w-full flex flex-col gap-4 max-w-[520px]">
                            <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
                                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                                <div className="text-[#545454] text-base font-normal font-['Work_Sans'] leading-[1.35]">OUR VISION</div>
                            </div>
                            <p className="text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                                A healthcare system where technology disappears into the background, making care safer, smarter, and more personal. We envision a future where every clinic, big or small, can deliver world-class digital care, powered by modern tools that just work.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="w-full min-h-screen md:py-24 py-16 max-w-[1440px]">
                <div className="w-full md:px-20 px-5 md:py-24 py-16 flex flex-col gap-9">
                    <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
                        <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                        <div className="text-[#545454] text-base font-normal font-['Work_Sans'] leading-[1.35]">WHO WE ARE</div>
                    </div>
                    <div className="w-full flex flex-col gap-6">
                        <h3 className="text-[#23586a] xl:text-5xl md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[1.35]">
                            Clinvvo is a B2B SaaS platform built by European medical professionals and technologists who believe that better healthcare starts with better tools.
                        </h3>
                        <h3 className="text-[#23586a] xl:text-5xl md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[1.35]">
                            We offer an end-to-end suite of features, from appointment booking and video consultations to AI-powered medical notes and EHR integration, that helps clinics digitize their services under their own brand.
                        </h3>
                    </div>

                </div>
            </section>
            <section className="w-full min-h-screen md:px-20 px-5 md:py-24 py-16 mx-auto flex flex-col items-center gap-16 max-w-[1440px]">
                <div className="w-full max-w-[999px] flex flex-col items-center gap-4 text-center">
                    <div className="flex flex-col max-w-[514px] items-center gap-2 w-full">
                        <div className="inline-flex items-center gap-1 py-0.5 rounded-[10px]">
                            <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full"></div>
                            <div className="text-[#545454] text-base font-normal font-['Work_Sans'] leading-[1.35]">AI THAT WORKS FOR YOU</div>
                        </div>
                        <h1 className="w-full text-[#23586a] text-4xl md:text-5xl lg:text-6xl font-medium font-['Lora'] leading-[1.35]">
                            Let AI Handle the Busywork
                        </h1>
                    </div>
                    <p className="w-full max-w-[743px] text-[#545454] text-lg md:text-xl font-normal font-['Work_Sans'] leading-[1.35]">
                        Our AI capabilities automate tasks like medical transcription and summarization, freeing up valuable time for caregivers and ensuring a smoother experience for patients. Clinics using Clinvvo see faster documentation, improved efficiency, and better care delivery, every step of the way.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <img src={work} alt="Work" className="max-w-full rounded-[12px]" />
                </div>
            </section>
            <Contact />
        </div>
    )
}

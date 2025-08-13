import { consult1, consult2, consult3, consult4, consult5, consult6, consult7, consult8, heroAi, heroAIMobile } from "../assets";
import { Button, Contact, Faq, Features, Testimonials, Workflow } from "../components";

function AiFeatures() {
    return (
        <div className="w-full">
            <section className="w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24">
                <div className="w-full flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-12 max-w-[750px] mx-auto">
                    <div className="flex flex-col justify-start items-start gap-3 md:gap-5 w-full">
                        <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%]">
                            Everything you need for faster, Smarter care
                        </h2>
                        <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                            Explore how PrevHealth's AI works quietly in the background to streamline care, reduce clicks, and empower providers and patients alike.
                        </p>
                    </div>
                    <Button>
                        See how it Works
                    </Button>
                </div>
                <div className="w-full max-w-full md:pt-12 pt-24 min-w-[calc(100vw-20px)] md:min-w-[unset]">
                    <img src={heroAi} alt="Everything you need for faster, Smarter care" className="max-w-[1168px] mx-auto w-full md:block hidden" />
                    <img src={heroAIMobile} alt="Everything you need for faster, Smarter care" className="w-full relative md:hidden" />
                </div>
            </section>
            <section className="w-full min-h-screen flex items-center justify-center lg:px-20 md:px-10 px-5 max-w-full">
                <div className="w-full md:max-w-[1280px] mx-auto inline-flex flex-col justify-start items-center gap-8 md:gap-12">
                    <div className="w-full md:w-[909px] flex flex-col justify-start items-center gap-4">
                        <div className="w-full md:w-[535px] flex flex-col justify-start items-center gap-2">
                            <div className="py-0.5 rounded-[10px] inline-flex justify-center items-center gap-1">
                                <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full" />
                                <div className="text-center text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[135%]">CORE AI FEATURES</div>
                            </div>
                            <div className="text-center text-[#23586a] text-3xl md:text-5xl font-medium font-['Lora'] leading-[135%]">Your AI Assistant in Every Consultation</div>
                        </div>
                        <div className="text-center text-[#545454] text-base md:text-xl font-normal font-['Work_Sans'] leading-[135%]">Trusted by care teams across Europe, PrevHealth's AI creates structured medical notes in seconds, fitting smoothly into your workflow so you can review and send to the journal system with one click.</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-10 w-full max-w-full">
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] md:col-span-2 md:grid grid-cols-3 flex flex-col">
                            <div className="col-span-1 w-full">
                                <div className="max-w-[411px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">Easy Medical Note Generation</div>
                                <div className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 max-w-[315px]">
                                    PrevHealth listens, transcribes, and converts your consultation into structured, clinically accurate notes—ready to review or send in seconds.                                <ul className="list-disc pl-4">
                                        <li className="">Auto-generated transcription and medical notes</li>
                                        <li className="">Works seamlessly for both in-person and digital consultation</li>
                                        <li className="">Structured output tailored to match your journal templates</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full col-span-2">
                                <img src={consult1} alt="" className="max-w-full w-full md:pl-20" />
                            </div>
                        </div>
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
                            <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">Start Smart with Preloaded Templates</div>
                            <p className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 max-w-[490px]">
                                We instantly load templates tailored to your clinical context—no setup, no formatting, just seamless documentation.
                            </p>
                            <div className="w-full flex justify-center md:pt-8 pt-4">
                                <img src={consult2} alt="Consult" className="max-w-[295px] w-full" />
                            </div>
                        </div>
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
                            <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">One Click Document Transfer</div>
                            <div className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 max-w-[393px]">
                                Doctors can send structured medical notes to their journal system instantly, no extra steps, no workflow interruptions.
                                <ul className="list-disc pl-4">
                                    <li className="">Supports all major web-based journal systems</li>
                                    <li className="">Compatible with your existing templates, making transfers fast and seamless</li>
                                </ul>
                            </div>
                            <div className="w-full flex justify-center md:pt-16 pt-12">
                                <img src={consult3} alt="Consult" className="max-w-[203px] md:ml-20" />
                            </div>

                        </div>
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
                            <img src={consult4} alt="" className="max-w-full w-full" />
                            <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%] md:pt-6 pt-4">Edit Notes, Hands Free</div>
                            <p className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 max-w-[540px]">
                                Make changes just by speaking. Add, remove, or rephrase with natural voice commands. No training needed                            </p>
                        </div>
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
                            <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">Start Smart with Preloaded Templates</div>
                            <p className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 pb-4 max-w-[490px]">
                                We instantly load templates tailored to your clinical context—no setup, no formatting, just seamless documentation.
                            </p>
                            <img src={consult5} alt="" className="max-w-full w-full" />

                        </div>
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] md:col-span-2 flex md:flex-row flex-col">
                            <div className="w-full">
                                <div className="max-w-[235px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">Built for Trust & Security</div>
                                <p className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 max-w-[460px]">
                                    PrevHealth is GDPR-compliant and offers secure login with BankID, SITHS via Net iD, and SITHS via eID—keeping patient data protected at all times                            </p>
                            </div>
                            <div className="w-full">
                                <img src={consult6} alt="" className="max-w-[95%] ml-auto w-full" />
                            </div>
                        </div>
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
                            <img src={consult7} alt="" className="max-w-full w-full" />
                            <div className="max-w-[390px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%] md:pt-6 pt-4">Multilingual Transcription</div>
                            <p className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 max-w-[460px]">
                                Speak in one language, get notes in another. PrevHealth supports multilingual consultations and transcribes everything in your preferred clinical language
                            </p>
                        </div>
                        <div className="w-full md:p-6 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)]">
                            <div className="max-w-[365px] justify-start text-[#343434] md:text-[28px] text-2xl font-medium font-['Work_Sans'] leading-[135%]">Effortless ICD-10 Coding</div>
                            <p className="text-[#555] font-['Work_Sans'] text-base font-normal leading-[135%] pt-2 max-w-[572px]">
                                No more digging through code lists. As you document, PrevHealth surfaces the most relevant ICD-10 codes right next to your notes, ready when you need them
                            </p>
                            <div className="w-full flex justify-center md:pt-8 pt-4">
                                <img src={consult8} alt="Consult" className="max-w-[430px] w-full" />
                            </div>
                        </div>

                    </div>

                    <div className="px-8 py-4 bg-[#23586a] rounded-[48px] inline-flex justify-center items-center mt-6 md:mt-0">
                        <div className="text-white text-base font-medium font-['Work_Sans'] leading-[135%]">Book a Demo</div>
                    </div>
                </div>
            </section>
            <Features />
            <Workflow />
            <Testimonials />
            <Faq />
            <Contact />
        </div>
    );
}

export default AiFeatures;


import { useEffect } from "react";
import { cloud, customize, demo, ecosystem1, ecosystem2, ecosystem3, ecosystem5, ecosystem6, gdpr, heroDoctor, heroDoctor1, idSvg, lock, microphone, rocket, support, sWorkFlow1, sWorkFlow2, sWorkFlow3 } from "../assets";
import { Button, Contact, Faq, StakeHolder } from "../components";

function ForDoctors() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);
    return (
    <div className="w-full">
        <section className="w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24 max-w-full">
            <div className="w-full flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-12 max-w-[743px] mx-auto">
                <div className="flex flex-col justify-start items-start gap-3 md:gap-4 w-full">
                    <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%] max-w-[632px] mx-auto">
                        Better Care Starts with Better Tools
                    </h2>
                    <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                        We bring together everything modern healthcare needs, from AI-enhanced workflows to personalized patient journeys. Fully white-labeled and built to scale, just for you.
                    </p>
                </div>
                <Button>
                    <a href="https://calendly.com/prevhealth/30min" target="_blank">Book a Demo</a>
                </Button>
            </div>
            <div className="w-full max-w-full md:min-w-[unset]  min-w-screen relative -left-5 md:left-[unset] md:pt-0 pt-18">
                <img
                    src={heroDoctor}
                    alt="Better Care Starts with Better Tools"
                    className="w-full relative mx-auto md:block hidden max-w-[1093px]"
                    style={{
                        filter: 'drop-shadow(10px 10px 20px rgba(0,0,0,0.5))'
                    }}
                />
                <img src={heroDoctor1} alt="Better Care Starts with Better Tools" className="w-full relative md:hidden drop-shadow-2xl" />
            </div>
        </section>

        <section className="w-full min-h-screen flex flex-col items-center gap-12 md:px-20 px-5 md:py-24 py-16">
            <div className="w-full max-w-[535px] flex flex-col items-center gap-2.5">
                <div className="rounded-[10px] inline-flex items-center gap-2">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
                    <span className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[135%]">
                        WHAT YOU GET
                    </span>
                </div>
                <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
                    All-in-One Healthcare Ecosystem
                </h2>
                <p className="w-full text-center text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                    Built for providers, doctors and patients. Designed to save time and streamline care.
                </p>
            </div>
            <div className="w-full md:grid flex flex-col md:gap-x-4 md:gap-y-5 gap-10 grid-cols-3 grid-rows-5">
                <div className="w-full h-full row-start-1 row-end-4 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
                    <img src={ecosystem1} alt="Ecosystem" className="max-w-full mx-auto" />
                    <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">Unified Dashboard</h3>
                    <div className="w-full justify-start text-[#545454] text-base font-normal font-['Work_Sans'] leading-[135%]">Manage patients, track consult notes, monitor group sessions, and schedule, all from one intuitive interface.</div>
                </div>
                <div className="w-full h-full row-start-1 row-end-3 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
                    <img src={ecosystem2} alt="Ecosystem" className="max-w-full mx-auto" />
                    <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">AI-Powered Clinical Notes</h3>
                    <div className="w-full justify-start text-[#545454] text-base font-normal font-['Work_Sans'] leading-[135%]">We automatically transcribe and summarize your consults, saving you time and cutting down on manual entry.</div>
                </div>
                <div className="w-full h-full row-start-1 row-end-4 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
                    <img src={ecosystem3} alt="Ecosystem" className="max-w-full mx-auto" />
                    <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">Smart Intake Summaries</h3>
                    <div className="w-full justify-start text-[#545454] text-base font-normal font-['Work_Sans'] leading-[135%]">Receive pre-filled, structured patient info before each consult. No more back-and-forth, just the details you need, upfront.</div>
                </div>
                <div className="w-full h-full row-start-4 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
                    <div className="w-full min-h-32 flex justify-center items-center">
                        <div className="w-44 h-8 px-2 py-1.5 bg-[#fd8883] cursor-pointer rounded-3xl outline-[0.27px] outline-offset-[-0.27px] outline-[#fec2b5] inline-flex justify-center items-center gap-1">
                            <img src={microphone} alt="Microphone" />
                            <div className="text-center justify-start text-white text-xs font-normal font-['Work_Sans'] leading-none">Add or Change</div>
                        </div>
                    </div>
                    <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">Voice-Based Note Editing</h3>
                    <div className="w-full justify-start text-[#545454] text-base font-normal font-['Work_Sans'] leading-[135%]">Need to change something? Just speak. Your edits are applied directly into the summary, hands-free.</div>
                </div>
                <div className="w-full h-full row-start-3 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
                    <img src={ecosystem5} alt="Ecosystem" className="max-w-full mx-auto" />

                    <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">In-Consult Resource Sharing</h3>
                    <div className="w-full justify-start text-[#545454] text-base font-normal font-['Work_Sans'] leading-[135%]">Easily send test results, documents, or links during a live consult, keeping everything within the session flow.</div>
                </div>
                <div className="w-full h-full row-start-4 row-end-6 md:py-5 p-4 rounded-[20px] bg-white shadow-[0_1px_24px_0_rgba(0,0,0,0.10)] flex flex-col gap-2">
                    <img src={ecosystem6} alt="Ecosystem" className="max-w-full mx-auto" />

                    <h3 className="w-full justify-start text-[#343434] md:text-3xl text-2xl font-medium font-['Work_Sans'] leading-[135%]">Group Session Hosting</h3>
                    <div className="w-full justify-start text-[#545454] text-base font-normal font-['Work_Sans'] leading-[135%]">Host multiple patients at once for common concerns or follow-ups, saving time and increasing reach.</div>
                </div>
            </div>
        </section>
        <section className="w-full min-h-screen flex flex-col items-center gap-12 md:px-20 px-5 md:py-24 py-16">
            <div className="w-full max-w-[475px] flex flex-col items-center gap-2.5">
                <div className="rounded-[10px] inline-flex items-center gap-2">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
                    <span className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[135%]">
                        BUILT FOR HOW YOU WORK
                    </span>
                </div>
                <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
                    Seamless, Smart Workflows
                </h2>
                <p className="w-full text-center text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                    Give your teams tools that actually save time
                </p>
            </div>

            <div className="w-full max-w-[1280px]">
                <div className="w-full pb-4 md:pb-0 overflow-x-auto md:overflow-x-visible scrollbar-hide">
                    <div className="w-max md:w-full grid grid-cols-3 gap-4">

                        <div className="w-[300px] md:w-full flex flex-col gap-4">
                            <div className="w-full bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex items-center justify-center">
                                <img src={sWorkFlow1} alt="Smart Workflow" className="w-full max-w-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                                    Log In & Get Ready
                                </h3>
                                <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                    Securely access your dashboard with BankID or SITHS & review smart intake summaries filled out by patients
                                </p>
                            </div>
                        </div>

                        <div className="w-[300px] md:w-full flex flex-col gap-4">
                            <div className="w-full bg-neutral-100 rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col items-center justify-center gap-2">
                                <img src={sWorkFlow2} alt="Smart Workflow" className="w-full max-w-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                                    Connect & Consult
                                </h3>
                                <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                    Start 1:1 or group consults via chat, audio, or video, with everything tailored to your specialty & settings
                                </p>
                            </div>
                        </div>

                        <div className="w-[300px] md:w-full flex flex-col gap-4">
                            <div className="w-full bg-neutral-100 rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col items-center justify-center gap-2">
                                <img src={sWorkFlow3} alt="Smart Workflow" className="w-full max-w-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                                    Let AI Handle the Notes
                                </h3>
                                <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                    Consults are transcribed and summarized in real time. Just review, edit if needed, and transfer directly to the journal
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <div className="w-full min-h-screen flex flex-col lg:flex-row justify-start items-start lg:items-start  gap-12 md:px-20 px-5 md:py-24 py-16  max-w-[1440px] mx-auto">
            <div className="w-full max-w-[420px] flex flex-col justify-start items-start gap-12">
                <div className="flex flex-col justify-start items-start gap-2.5">
                    <div className="py-1 rounded-[10px] inline-flex justify-center items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#fd8883] rounded-full" />
                        <span className="text-[#545454] text-base font-normal font-['Work_Sans'] leading-[135%]">
                            HOW IT WORKS
                        </span>
                    </div>
                    <h2 className="text-[#23586a] text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
                        How You Launch With Clinvvo
                    </h2>
                </div>
                <Button className="md:hidden block">
                    <a href="https://calendly.com/prevhealth/30min" target="_blank">Book a Demo Today</a>
                </Button>
            </div>
            <div className="w-full overflow-x-auto max-w-full scrollbar-hide md:p-0 p-1">
                <div className="w-full md:grid grid-cols-1 md:grid-cols-2 gap-4 flex">
                    <div className="w-full min-w-[322px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
                        <img src={demo} alt="Demo" className="w-12 h-12" />

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#23586a] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                                Book a Demo
                            </h3>
                            <p className="text-[#545454] text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                Let's talk. You tell us what your organization needs, we'll show you how it all works.
                            </p>
                        </div>
                    </div>
                    <div className="w-full min-w-[322px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
                        <img src={customize} alt="Customize" className="w-12 h-12" />

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#23586a] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                                Customize Your Platform
                            </h3>
                            <p className="text-[#545454] text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                Pick the services, language options and features that can support your patients and care teams.
                            </p>
                        </div>
                    </div>
                    <div className="w-full min-w-[322px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
                        <img src={rocket} alt="Rocket" className="w-12 h-12" />

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#23586a] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                                We Brand & Launch
                            </h3>
                            <p className="text-[#545454] text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                We design and deliver the platform under your brand. Your team gets trained. You go live, fast.
                            </p>
                        </div>
                    </div>

                    <div className="w-full min-w-[322px] md:min-w-[unset] px-6 pt-8 pb-12 bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] flex flex-col gap-6">
                        <img src={support} alt="Support" className="w-12 h-12" />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#23586a] text-2xl font-medium font-['Work_Sans'] leading-[135%]">
                                Support & Upgrade
                            </h3>
                            <p className="text-[#545454] text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                We handle maintenance, updates, and compliance. You focus on growing care, we've got the tech.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Button className="md:hidden block">
                <a href="https://calendly.com/prevhealth/30min" target="_blank">Book a Demo Today</a>
            </Button>
        </div>
        <StakeHolder />
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-12 md:px-20 px-5 md:py-24 py-16 max-w-[1063px] mx-auto">
            <div className="w-full max-w-[616px] flex flex-col items-center gap-2.5">
                <div className="rounded-[10px] inline-flex items-center gap-2">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
                    <span className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[135%]">
                        SECURITY & COMPLIANCE
                    </span>
                </div>
                <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
                    Secure, Compliant, Trusted
                </h2>

            </div>
            <div className="w-full md:max-w-[unset] max-w-[257px] flex lg:gap-16 gap-12 md:flex-row flex-col h-full items-center">
                <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
                    <img src={gdpr} alt="GDPR Compliant" />
                    <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">GDPR Compliant</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
                    <img src={lock} alt="Data encryption at rest and in transit" />
                    <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">Data encryption at rest and in transit</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
                    <img src={idSvg} alt="SITHS, BankID based login" />
                    <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">SITHS, BankID based login</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-8 h-full">
                    <img src={cloud} alt="Secure cloud infrastructure" />
                    <p className="text-center justify-start text-[#23586a] md:text-2xl text-xl font-medium font-['Lora'] leading-[135%]">Secure cloud infrastructure</p>
                </div>
            </div>
        </section>
        <Faq />
        <Contact />
    </div>);
}

export default ForDoctors;
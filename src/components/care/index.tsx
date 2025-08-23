import { aiTranscription, dashboard, digitalConsultation, questionnaires, templateDropdown } from "../../assets";


function Care() {
    return (
          <section className="w-full md:py-36 md:px-20 py-16 px-5 max-w-[1560px] mx-auto min-h-screen">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-8 md:gap-14">
                <div className="w-full max-w-[579px] flex flex-col items-center gap-3 md:gap-4 text-center">
                    <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FD8883] rounded-full" />
                        <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                            PLATFORM FEATURES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-[135%]">
                        Designed to Support Both Sides of Care
                    </h2>
                    <p className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                        We empower both doctors and patients with seamless, time-saving features all in one customizable platform
                    </p>
                </div>
                <div className="w-full max-w-full overflow-x-scroll scrollbar-hide">
                    <div className="w-full flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-white md:min-w-[unset] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-6 flex flex-col md:flex-row gap-4 md:col-span-2 overflow-hidden">
                            <div className="flex flex-col gap-4 w-full">
                                <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-[Work_Sans] leading-[135%]">
                                    Centralized Doctor Dashboard
                                </h3>
                                <p className="text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                    One secure place for everything, from patient information to consultations, so you can focus more on care and less on clicking around.
                                </p>
                            </div>
                            <div className="relative md:w-[200%] w-[100%] flex items-end">
                                <img
                                    className="min-w-[calc(100vw-32px)] md:min-w-[unset] right-4 relative md:-right-6 -bottom-6 z-10  md:min-h-[400px] md:aspect-ratio-[512/391]"
                                    src={dashboard}
                                    alt="Doctor Dashboard"
                                />
                            </div>
                        </div>

                        <div className="bg-white md:min-w-[unset] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-6 flex flex-col gap-4">
                            <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-[Work_Sans] leading-[135%]">
                                Guided Questionnaires
                            </h3>
                            <p className="text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                Just follow a few simple steps and we'll help you share exactly what your doctor needs to know.
                            </p>
                            <img src={questionnaires} alt="Guided Questionnaires" className="" />
                        </div>

                        <div className="bg-white md:min-w-[unset] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-6 flex flex-col gap-0 overflow-hidden">
                            <div className="w-full">
                                <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-[Work_Sans] leading-[135%] pb-4">
                                    AI Enabled Transcription & Summarization
                                </h3>
                                <p className="text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                    Make changes to notes hands-free — just speak and it updates.
                                </p>
                            </div>
                            <div className="w-full">

                                <img src={aiTranscription} alt="AI Enabled Transcription & Summarization" className="relative -bottom-6 -right-6" />
                            </div>
                        </div>

                        <div className="bg-white md:min-w-[unset] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-6 flex flex-col justify-between gap-4">
                            <div className="relative h-40">
                                <img
                                    className="w-full h-full object-cover rounded-[10px]"
                                    src={digitalConsultation}
                                    alt="Digital Consults"
                                />
                            </div>
                            <div className="w-full pb-5">
                                <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-[Work_Sans] leading-[135%] pb-4">
                                    Digital Consults: Chat, Audio & Video
                                </h3>
                                <p className="text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                    Patients connect easily. Doctors respond quickly — anytime, anywhere.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white md:min-w-[unset] min-w-full rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] p-4 md:p-6 flex flex-col gap-4 overflow-hidden">
                            <h3 className="text-xl md:text-3xl text-neutral-700 font-medium font-[Work_Sans] leading-[135%]">
                                Quick Service Selection
                            </h3>
                            <p className="text-base text-[#555] font-normal font-[Work_Sans] leading-[135%]">
                                Choose your region and health need in seconds.
                            </p>
                            <div className="relative w-full flex justify-center h-full">
                                <img src={templateDropdown} alt="Dropdown Template" className="-bottom-5 relative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Care;

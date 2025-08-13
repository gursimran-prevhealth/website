import { workflow1, workflow2, workflow3 } from "../../assets";

function Workflow() {
    return (
        <section className="w-full lg:px-20 md:px-10 px-5 md:py-24 py-16 min-h-screen">
            <div className="w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-14">
                <div className="w-full max-w-[672px] flex flex-col items-center gap-2 md:gap-3">
                    <div className="py-1 flex items-center gap-2">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
                        <span className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-snug">
                            HOW THIS PROCESS WORKS
                        </span>
                    </div>
                    <h2 className="w-full text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-normal md:leading-[54px] lg:leading-[62.40px]">
                        AI That Listens, Writes, and Fits Into Your Workflow
                    </h2>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div className="flex flex-col gap-4 md:gap-5">
                        <img src={workflow1} alt="Workflow Step 1" className="w-full h-full object-cover rounded-[20px]" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-7 md:leading-8 lg:leading-9">
                                Set Up Your Consult
                            </h3>
                            <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-snug md:leading-normal lg:leading-7">
                                Select the region, department, preferred template & configure microphone settings, then start your session with the patient.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-5">
                        <img src={workflow2} alt="Workflow Step 2" className="w-full h-full object-cover rounded-[20px]" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-7 md:leading-8 lg:leading-9">
                                You Talk, AI Writes
                            </h3>
                            <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-snug md:leading-normal lg:leading-7">
                                After the consultation, our AI transcribes the recording and creates a structured medical note—clear, accurate, and ready to use.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-5">
                        <img src={workflow3} alt="Workflow Step 3" className="w-full h-full object-cover rounded-[20px]" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-7 md:leading-8 lg:leading-9">
                                Review & Finalize
                            </h3>
                            <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-snug md:leading-normal lg:leading-7">
                                Edit by voice or text, make any changes, then transfer the note to the patient's medical journal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Workflow;
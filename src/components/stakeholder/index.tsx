import { stakeAi, stakeDoctor, stakePatient } from "../../assets";

function StakeHolder() {
    return (<section className="w-full flex flex-col items-center gap-12 md:px-20 px-5 md:py-24 py-16 min-h-screen">
        <div className="w-full max-w-[541px] flex flex-col items-center gap-2.5">
            <div className="rounded-[10px] inline-flex items-center gap-2">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#fd8883] rounded-full" />
                <span className="text-[#545454] text-sm md:text-base font-normal font-['Work_Sans'] leading-[135%]">
                    WHO WE HELP
                </span>
            </div>
            <h2 className="w-full pt-1.5 text-center text-[#23586a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['Lora'] leading-[135%]">
                Built for Every Healthcare Stakeholder
            </h2>

        </div>

        <div className="w-full max-w-[1280px]">
            <div className="w-full pb-4 md:pb-0 overflow-x-auto md:overflow-x-visible scrollbar-hide">
                <div className="w-max md:w-full grid grid-cols-3 gap-4">

                    <div className="w-[300px] md:w-full flex flex-col gap-4">
                        <div className="w-full bg-white rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex items-center justify-center">
                            <img src={stakeDoctor} alt="Smart Workflow" className="w-full max-w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                                For Doctors
                            </h3>
                            <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                Less admin, more care. AI assists with medical notes.
                            </p>
                        </div>
                    </div>

                    <div className="w-[300px] md:w-full flex flex-col gap-4">
                        <div className="w-full bg-neutral-100 rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col items-center justify-center gap-2">
                            <img src={stakePatient} alt="Smart Workflow" className="w-full max-w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                                For Patients
                            </h3>
                            <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                Easy access to services, appointments, and answers, wherever they are.                            </p>
                        </div>
                    </div>

                    <div className="w-[300px] md:w-full flex flex-col gap-4">
                        <div className="w-full bg-neutral-100 rounded-[20px] shadow-[0px_1px_24px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col items-center justify-center gap-2">
                            <img src={stakeAi} alt="Smart Workflow" className="w-full max-w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#343434] text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] leading-[135%]">
                                AI for Healthcare Providers
                            </h3>
                            <p className="text-[#545454] text-sm md:text-base lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                                Scalable, cost-saving digital health infrastructure branded for your organization.                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>);
}

export default StakeHolder;
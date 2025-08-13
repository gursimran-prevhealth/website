import { email, linkedin, location, logo } from "../../assets";

export default function Footer() {
    return (
        <div className="w-full bg-neutral-100 py-12 md:py-28 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                    <div className="flex flex-col gap-6 max-w-[709px]">
                        <img
                            className="w-52 md:w-60 h-7 md:h-8"
                            src={logo}
                            alt="PrevHealth Logo"
                        />
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <img src={email} className="w-6 h-4" />
                                </div>
                                <span className="text-zinc-500 text-base font-normal font-[Work_Sans]">
                                    contact@preveu.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={location} className="w-8 h-8 flex items-center justify-center relative" />

                                <span className="text-zinc-500 text-base font-normal font-[Work_Sans]">
                                    Idungränd 8, 187 73 Täby, Sweden
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
                        <div className="flex flex-col gap-4 w-36">
                            {['AI Features', 'Platform Features', 'About Us', 'Contact Us'].map((link) => (
                                <div key={link} className="group flex flex-col items-start gap-0.5 cursor-pointer">
                                    <span className="text-zinc-500 text-base font-normal font-[Work_Sans] group-hover:text-[#23586A]">
                                        {link}
                                    </span>
                                    <div className="w-0 h-0.5 bg-cyan-900 rounded-lg group-hover:w-full transition-all" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 w-[160px]">
                            {['Privacy Policy', 'Terms & Conditions'].map((link) => (
                                <div key={link} className="group flex flex-col items-start gap-0.5 cursor-pointer">
                                    <span className="text-zinc-500 text-base font-normal font-[Work_Sans] group-hover:text-[#23586A]">
                                        {link}
                                    </span>
                                    <div className="w-0 h-0.5 bg-cyan-900 rounded-lg group-hover:w-full transition-all" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-300" />

                <div className="flex flex-row justify-between items-center gap-4">
                    <span className="text-zinc-500 text-sm md:text-xl font-normal font-[Work_Sans]">
                        ©2025, PrevHealth, All Rights Reserved
                    </span>
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <img src={linkedin} className="w-4 h-4 md:w-8 md:h-8" />
                    </div>
                </div>
            </div>
        </div>
    )
}

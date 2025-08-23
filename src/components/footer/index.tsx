import { Link } from "react-router-dom";
import { email, linkedin, logo } from "../../assets";
const navItems = [
    { label: "AI Features", path: "/ai-features" },
    { label: "For Doctors", path: "/for-doctors" },
    { label: "For Patients", path: "/for-patients" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact-us" },
];
export default function Footer() {
    return (
        <div className="w-full bg-neutral-100 py-12 md:py-28 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                    <div className="flex flex-col gap-6 max-w-[709px]">
                        <img
                            className="w-32 md:w-fit h-7 md:h-8"
                            src={logo}
                            alt="Clinvvo Logo"
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
                            {/* <div className="flex items-center gap-2">
                                <img src={location} className="w-8 h-8 flex items-center justify-center relative" />

                                <span className="text-zinc-500 text-base font-normal font-[Work_Sans]">
                                    Idungränd 8, 187 73 Täby, Sweden
                                </span>
                            </div> */}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-16">
                        <div className="flex flex-col gap-4 w-36">
                            {navItems.slice(0,3).map((link, idx) => (
                                <Link
                                    key={idx}
                                    to={link.path}
                                    className="group flex flex-col items-start gap-0.5 cursor-pointer"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <span className="text-zinc-500 text-base font-normal font-[Work_Sans] group-hover:text-[#23586A]">
                                        {link.label}
                                    </span>
                                    <div className="w-0 h-0.5 bg-cyan-900 rounded-lg group-hover:w-full transition-all" />
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 w-36">
                            {navItems.slice(3,5).map((link, idx) => (
                                <Link
                                    key={idx}
                                    to={link.path}
                                    className="group flex flex-col items-start gap-0.5 cursor-pointer"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <span className="text-zinc-500 text-base font-normal font-[Work_Sans] group-hover:text-[#23586A]">
                                        {link.label}
                                    </span>
                                    <div className="w-0 h-0.5 bg-cyan-900 rounded-lg group-hover:w-full transition-all" />
                                </Link>
                            ))}
                        </div>

                        {/* <div className="flex flex-col gap-4 w-[160px]">
                            {['Privacy Policy', 'Terms & Conditions'].map((link) => (
                                <div key={link} className="group flex flex-col items-start gap-0.5 cursor-pointer">
                                    <span className="text-zinc-500 text-base font-normal font-[Work_Sans] group-hover:text-[#23586A]">
                                        {link}
                                    </span>
                                    <div className="w-0 h-0.5 bg-cyan-900 rounded-lg group-hover:w-full transition-all" />
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-300" />

                <div className="flex flex-row justify-between items-center gap-4">
                    <span className="text-zinc-500 text-sm md:text-xl font-normal font-[Work_Sans]">
                        ©2025, Clinvvo, All Rights Reserved
                    </span>
                    <a href={"https://www.linkedin.com/company/clinvvo/"} target="_blank" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <img src={linkedin} className="w-4 h-4 md:w-8 md:h-8" />
                    </a>
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}

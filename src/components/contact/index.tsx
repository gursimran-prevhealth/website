import { Link } from "react-router-dom";
import { contactBanner } from "../../assets";

function Contact() {
    return (
        <section className="w-full px-5 sm:pb-32 pb-14 pt-8 sm:min-h-screen">
            <div className="sm:px-0 px-5 w-full">
                <img
                    src={contactBanner}
                    alt="Contact Banner"
                    className="max-w-[908px] w-full flex-shrink-0 rounded-[20px] shadow-[-25px_125px_150px_0_rgba(0,0,0,0.25)] mx-auto"
                />
            </div>
            <div className="w-full max-w-[1400px] mx-auto bg-cyan-900 rounded-xl overflow-hidden p-8 md:p-16 md:min-h-64 flex flex-col md:flex-row justify-between md:items-center items-start gap-8 -mt-12 md:-mt-40 relative z-[1]">
                <h2 className="text-white text-3xl md:text-5xl font-medium font-[Lora] leading-10 md:leading-[64.80px]">
                    Still have questions?<br />
                    Let's Talk
                </h2>
                <Link to={"/contact-us"} className="bg-white cursor-pointer text-[#23586A] text-sm md:text-base font-medium font-[Work_Sans] leading-tight md:leading-snug px-6 py-3.5 md:px-8 md:py-4 rounded-[48px] hover:bg-cyan-50 transition-colors duration-200">
                    Contact Us
                </Link>
            </div>
        </section>
    );
}

export default Contact;
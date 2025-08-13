import { email, location } from "../assets";
import { Button, Faq } from "../components";

function ContactUs() {
    return (
        <div className="w-full">
            <section className="w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24 max-w-[1440px] flex flex-col items-center gap-12 mx-auto">
                <div className="flex flex-col justify-center items-center gap-3 md:gap-4 w-full max-w-[980px]">
                    <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%] mx-auto">
                        Ready to Get Started?
                    </h2>
                    <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                        Have questions? <br />Reach out, and let's start the conversation.
                    </p>
                </div>
                <div className="w-full flex lg:flex-row flex-col xl:gap-24 lg:gap-16 gap-12 justify-center lg:items-start items-center">
                    <div className="w-full max-w-[740px] bg-[#FBFBFB] xl:py-16 xl:px-20 md:p-12 p-8">
                        <div className="w-full flex flex-col gap-14">
                            <input type="text" name="name" id="name" placeholder="Name" className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] not-italic font-normal leading-normal outline-none border-b-[1px] border-b-[#9DBEB9]" />
                            <input type="text" name="email" id="email" placeholder="Email" className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] not-italic font-normal leading-normal outline-none border-b-[1px] border-b-[#9DBEB9]" />
                            <input type="text" name="phone" id="phone" placeholder="Phone Number" className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] not-italic font-normal leading-normal outline-none border-b-[1px] border-b-[#9DBEB9]" />
                            <textarea name="phone" id="phone" placeholder="Anything else you’d like us to know?" className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] not-italic font-normal leading-normal outline-none border-b-[1px] border-b-[#9DBEB9] resize-none" rows={3} />
                            <Button className="w-fit">
                                Let’s Talk
                            </Button>
                        </div>
                    </div>
                    <div className="w-[333px] flex flex-col gap-2 lg:pt-16">
                        <div className="w-full flex items-center gap-2">
                            <img src={email} alt="Email" />
                            <span className="text-[#7D7D7D] font-[Work_Sans] text-[16px] not-italic font-normal leading-[146%]">contact@preveu.com</span>
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <img src={location} alt="Location" />
                            <span className="text-[#7D7D7D] font-[Work_Sans] text-[16px] not-italic font-normal leading-[146%]">Idungränd 8, 187 73 Täby, Sweden</span>
                        </div>
                    </div>

                </div>
            </section>
            <Faq />
        </div>
    );
}

export default ContactUs;
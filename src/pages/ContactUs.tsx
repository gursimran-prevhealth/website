import { useEffect, useState } from "react";
import { email } from "../assets";
import { Button, Faq } from "../components";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSending, setIsSending] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    try {
      const newFormData = new FormData();
      newFormData.append("email", formData.email);
      newFormData.append("message", formData.message);
      newFormData.append("name", formData.name);
      newFormData.append("phone", formData.phone);

      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_SPREADSHEET_URL}`,
        {
          method: "POST",
          body: newFormData,
        }
      );
      const result = await response.json();
      setFormData({ email: "", message: "", name: "", phone: "" });
      setError("");
      setSuccess(t("contactus.form.success"));
      console.log("Google Sheet Response:", result);
    } catch (error) {
      setSuccess("");
      setError(t("contactus.form.error"));
      console.error("Error submitting form:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full">
      <section className="w-full min-h-screen px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24 max-w-[1440px] flex flex-col items-center gap-12 mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4 w-full max-w-[980px]">
          <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%] mx-auto">
            {t("contactus.hero.title")}
          </h2>
          <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl font-light font-['Work_Sans'] leading-[135%]">
            {t("contactus.hero.description1")}
            <br />
            {t("contactus.hero.description2")}
          </p>
        </div>
        <div className="w-full flex lg:flex-row flex-col xl:gap-24 lg:gap-16 gap-12 justify-center lg:items-start items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[740px] bg-[#FBFBFB] xl:py-16 xl:px-20 md:p-12 p-8"
          >
            <div className="w-full flex flex-col gap-14">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contactus.form.namePlaceholder")}
                required
                className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] font-light outline-none border-b border-b-[#9DBEB9]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contactus.form.emailPlaceholder")}
                required
                className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] font-light outline-none border-b border-b-[#9DBEB9]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contactus.form.phonePlaceholder")}
                className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] font-light outline-none border-b border-b-[#9DBEB9]"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contactus.form.messagePlaceholder")}
                rows={3}
                className="w-full block pb-3 text-[#23586A] placeholder:text-[#AFAFAF] font-[Work_Sans] text-[20px] font-light outline-none border-b border-b-[#9DBEB9] resize-none"
              />
              {success && (
                <p className="text-[#555] text-base font-[Work_Sans]">
                  {success}
                </p>
              )}
              {error && (
                <p className="text-red-600 text-base font-[Work_Sans]">
                  {error}
                </p>
              )}
              <Button type="submit" className="w-fit" disabled={isSending}>
                {t("contactus.form.button")}
              </Button>
            </div>
          </form>
          <div className="w-[333px] flex flex-col gap-2 lg:pt-16">
            <div className="w-full flex items-center gap-2">
              <img src={email} alt="Email" />
              <span className="text-[#7D7D7D] font-[Work_Sans] text-[16px] font-light leading-[146%]">
                contact@clinvvo.ai
              </span>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
}

export default ContactUs;

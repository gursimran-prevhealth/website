import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib";
import { logo } from "../../assets";
import Button from "../button";
import Dropdown, { type DropdownOption } from "../ui/Dropdown";
import i18n from "../../i18n";
import { LANGUAGES } from "../../lib/utils/cn";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setAppLanguage } from "../../store/slices/generalSlice";

const Navbar = () => {
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.aiFeatures"), path: "/ai-features" },
    { label: t("nav.forDoctors"), path: "/for-doctors" },
    { label: t("nav.forPatients"), path: "/for-patients" },
    { label: t("nav.aboutUs"), path: "/about" },
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [selectedLanguage, setSelectedLanguage] =
    useState<DropdownOption | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleSetLanguage = (language: DropdownOption) => {
    const { value } = language;
    i18n.changeLanguage(String(value));
    localStorage.setItem("language", String(value));
    setSelectedLanguage(language);
    dispatch(setAppLanguage(String(value)));
  };

  useEffect(() => {
    const saved = localStorage.getItem("language") || i18n.language;
    setSelectedLanguage(
      LANGUAGES.find((l) => l.value === saved) || LANGUAGES[0]
    );
  }, []);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-[100]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-20 h-16 md:h-20 flex items-center justify-between relative">
        <Link to="/" className="w-28 md:w-44 h-5 md:h-7 flex-shrink-0 z-[60]">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group inline-flex flex-col justify-start items-center gap-0.5"
              >
                <div
                  className={cn(
                    "text-sm md:text-base font-normal font-[Work_Sans] leading-snug",
                    isActive
                      ? "text-[#23586A] font-medium"
                      : "text-[#23586A]  transition",
                    "py-1"
                  )}
                >
                  {item.label}
                </div>

                <div
                  className={cn(
                    "h-0.5 rounded-lg bg-[#FD8883] transition-transform duration-500 origin-center",
                    isActive
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="hidden md:inline-flex justify-end rounded-full cursor-pointer w-full gap-2">
            <Button
              className="hidden md:inline-flex tracking-wider !h-11"
              onClick={() => navigate("/contact-us")}
            >
              {t("nav.contactUs")}
            </Button>
            <Dropdown
              icon={
                <img
                  src={"/images/language.svg"}
                  alt="Language"
                  className="w-5 h-5"
                />
              }
              label={selectedLanguage ? "" : t("dropdown.selectLanguage")}
              defaultValue={
                selectedLanguage ? selectedLanguage.value : undefined
              }
              onSelect={handleSetLanguage}
              options={LANGUAGES}
              // arrowIcon={
              //   <img
              //     src={"/images/up-arrow.svg"}
              //     alt="Select"
              //     className="w-4 h-4"
              //   />
              // }
              buttonClassName="!bg-white hidden  md:inline-flex !h-11"
              buttonVariant="outline"
            />
          </div>

          <div className="md:hidden">
            <button
              className="relative w-5 h-4.5 flex flex-col justify-between items-center md:hidden z-[100]"
              onClick={toggleMobileMenu}
            >
              <div
                className={`shrink-0 h-0.5 w-6 bg-[#23586A] rounded-sm transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`shrink-0 h-0.5 w-6 bg-[#23586A] rounded-sm transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col z-50 transition-all duration-500 max-sm:px-6 sm:px-8 pt-16 pb-safe">
            <div className="flex-1 overflow-y-auto flex flex-col justify-between">
              <nav className="flex flex-col items-start gap-2 py-8">
                {navItems.map((item) => {
                  const isActive = currentPath === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "font-[Work_Sans] transition text-[32px] leading-[140%] font-normal",
                        isActive
                          ? "text-[#fd8883]"
                          : "text-[#23586A] hover:text-[#fd8883]"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-4 pb-8 px-1">
                <Button
                  className="!h-11 mt-auto"
                  onClick={() => {
                    navigate("/contact-us");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("nav.contactUs")}
                </Button>

                <Dropdown
                  icon={
                    <img
                      src={"/images/language.svg"}
                      alt="Language"
                      className="w-5 h-5"
                    />
                  }
                  label={selectedLanguage ? "" : t("dropdown.selectLanguage")}
                  defaultValue={
                    selectedLanguage ? selectedLanguage.value : undefined
                  }
                  onSelect={handleSetLanguage}
                  options={LANGUAGES}
                  arrowIcon={
                    <img
                      src={"/images/up-arrow.svg"}
                      alt="Select"
                      className="w-4 h-4"
                    />
                  }
                  buttonClassName="!bg-white !h-11"
                  buttonVariant="outline"
                  direction="up"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
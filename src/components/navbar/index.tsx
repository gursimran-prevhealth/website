import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib";
import { logo } from "../../assets";
import Button from "../button";

const navItems = [
  { label: "AI Features", path: "/ai-features" },
  { label: "For Doctors", path: "/for-doctors" },
  { label: "For Patients", path: "/for-patients" },
  { label: "About Us", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" };
  }, [isMobileMenuOpen])

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
                className="inline-flex flex-col justify-start items-center gap-0.5"
              >
                <div
                  className={cn(
                    "text-sm md:text-base font-normal font-[Work_Sans] leading-snug",
                    isActive
                      ? "text-[#23586A] font-medium"
                      : "text-[#23586A] hover:text-rose-500 transition",
                    "py-1"
                  )}
                >
                  {item.label}
                </div>
                <div
                  className={cn(
                    "h-0.5 rounded-lg transition-all duration-400",
                    isActive ? "bg-[#FD8883] w-full" : "w-0 bg-[#FD8883]"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <Button className="hidden md:inline-flex" onClick={() => navigate('/contact-us')}>
            Contact Us
          </Button>
          {/* <div className="hidden md:inline-flex items-center px-3 sm:px-8 py-1.5 sm:py-3 rounded-full outline-1 outline-slate-400 gap-[3px] cursor-pointer">
            <img src={globe} alt="Globe" className="w-4 sm:w-5 h-4 sm:h-5 object-contain" />
            <span className="text-[#23586A] text-xs sm:text-sm font-medium font-[Work_Sans] leading-snug">
              English
            </span>
          </div> */}

          <div className="md:hidden mx-3">
            <button
              className="relative w-5 h-4.5 flex flex-col justify-between items-center md:hidden z-[100]"
              onClick={toggleMobileMenu}
            >
              <div
                className={`shrink-0 h-0.5 w-8 bg-[#23586A] rounded-sm transform transition duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <div
                className={`shrink-0 h-0.5 w-8 bg-[#23586A] rounded-sm transform transition duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>

          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-white flex flex-col z-50 
               transition-all duration-500 max-sm:px-6 sm:px-8 pt-16 pb-10
               h-[100dvh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 flex-1">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "font-[Work_Sans] transition text-[32px] leading-[140%]",
                      isActive
                        ? "text-[#fd8883] font-semibold"
                        : "text-[#23586A] hover:text-[#fd8883]"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Contact button stays visible around 90% height */}
              <div className="mt-auto flex justify-center pb-4">
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => {
                    navigate("/contact-us");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}


      </div>
    </header>
  );
};

export default Navbar;
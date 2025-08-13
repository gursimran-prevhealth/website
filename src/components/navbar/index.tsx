import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib";
import { globe, logo } from "../../assets";
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

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Reduced container padding on mobile */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-20 h-16 md:h-20 flex items-center justify-between relative">
        <Link to="/" className="w-28 md:w-44 h-5 md:h-6 flex-shrink-0">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </Link>

        {/* Desktop Navigation Links */}
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
          <div className="hidden md:inline-flex items-center px-3 sm:px-8 py-1.5 sm:py-3 rounded-full outline-1 outline-slate-400 gap-[3px] cursor-pointer">
            <img src={globe} alt="Globe" className="w-4 sm:w-5 h-4 sm:h-5 object-contain" />
            <span className="text-[#23586A] text-xs sm:text-sm font-medium font-[Work_Sans] leading-snug">
              English
            </span>
          </div>

          <div className="md:hidden">
            <button
              className="text-[#23586A] focus:outline-none p-1"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
            <nav className="flex flex-col px-4 py-2">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "py-2 px-2 text-sm font-medium border-b border-gray-100",
                      isActive ? "text-rose-500" : "text-[#23586A]"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 mt-3">
                <Button>Contact Us</Button>
                <div className="flex items-center justify-center px-3 py-2 rounded-full outline-1 outline-slate-400 gap-1">
                  <img src={globe} alt="Globe" className="w-4 h-4 object-contain" />
                  <span className="text-[#23586A] text-xs font-medium font-[Work_Sans] leading-snug">
                    English
                  </span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
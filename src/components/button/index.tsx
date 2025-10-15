import React from "react";
import { cn } from "../../lib";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "green" | "outline" | "primary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  style?: React.CSSProperties;
};

const Button = ({
  children,
  onClick,
  variant = "green",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "cursor-pointer outline-none border-none rounded-full flex items-center justify-center text-center font-medium font-[Work_Sans] transition-colors duration-300 disabled:event-points-none disabled:bg-gray-400";

  const sizeStyles =
    "text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 leading-[135%]";

  const variants = {
    green: "bg-[#23586A] text-white hover:bg-[#23586A]/90",
    primary: `bg-primary !text-white hover:bg-primary-dark
        focus:ring-primary focus:ring-2 focus:ring-offset-0 
        w-full`,

    outline: `bg-transparent border border-[#DADADA] text-primary-dark 
        hover:border-primary-dark hover:bg-orange-100 
        focus:ring-primary-dark focus:ring-2 focus:ring-offset-0 
        w-full`,

    secondary: `bg-[#F5F5F5] !text-gray-text hover:bg-[#E0E0E0]
        focus:ring-[#F5F5F5] focus:ring-2 focus:ring-offset-0 
        w-full`,

    google:
      "bg-white text-black border border-gray-300 hover:bg-gray-100 w-full", // Added google variant
  };

  const variantStyles = variants[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, sizeStyles, variantStyles, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
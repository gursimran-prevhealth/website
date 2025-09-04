import React from "react";
import { cn } from "../../lib";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "green";
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
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
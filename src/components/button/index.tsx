import React from "react";
import { cn } from "../../lib";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "green";
    className?: string;
    type?: "button" | "submit" | "reset";
};

const Button = ({
    children,
    onClick,
    variant = "green",
    className = "",
    type = "button",
}: ButtonProps) => {
    const baseStyles =
        "cursor-pointer outline-none border-none rounded-full flex items-center justify-center text-center font-medium font-[Work_Sans] transition-colors duration-300";

    const sizeStyles =
        "text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 leading-[135%]";

    const variants = {
        green: "bg-[#23586A] text-white hover:bg-white hover:text-[#23586A] hover:shadow-[inset_1px_1px_4px_#23586A,inset_-1px_-1px_4px_#23586A]",
    };

    const variantStyles = variants[variant];

    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(baseStyles, sizeStyles, variantStyles, className)}
        >
            {children}
        </button>
    );
};

export default Button;
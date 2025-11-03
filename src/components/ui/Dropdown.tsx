"use client";

import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import Loader from "./Loader";
import { useTranslation } from "react-i18next";
import Button from "../button";

export interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownProps {
  icon?: ReactNode;
  label: string;
  options: DropdownOption[];
  onSelect?: (option: DropdownOption) => void;
  defaultValue?: string | null | number;
  buttonVariant?: "green" | "outline" | "primary";
  buttonClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  arrowIcon?: ReactNode;
  isTemplate?: boolean;
  showLabelWhenSelected?: boolean;
  onOpen?: () => void;
  disabled?: boolean;
  isProcessing?: boolean;
  disableDropdown?: boolean;
  direction?: "up" | "down";
}

const Dropdown = ({
  icon,
  label,
  options,
  onSelect,
  defaultValue,
  buttonVariant = "outline",
  buttonClassName = "",
  dropdownClassName = "",
  optionClassName = "",
  // arrowIcon,
  isTemplate = false,
  showLabelWhenSelected = true,
  onOpen,
  disabled,
  isProcessing = false,
  direction,
  disableDropdown,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | number | null>(
    defaultValue || null
  );
  const [openDirection, setOpenDirection] = useState<"up" | "down">("down");
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (onOpen) {
      onOpen();
    }
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option.value);
    onSelect?.(option);
    setIsOpen(false);
  };

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle default value from props/API
  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue);
    } else {
      setSelected(null);
    }
  }, [defaultValue]);

  // Calculate optimal dropdown dimensions
  useEffect(() => {
    if (!buttonRef.current || options.length === 0) return;

    // Get button width as minimum width
    const buttonWidth = buttonRef.current.offsetWidth;

    // Calculate content width by measuring text
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      context.font = "16px system-ui, -apple-system, sans-serif";

      let maxTextWidth = 0;
      options.forEach((option) => {
        const textWidth = context.measureText(option.label).width;
        maxTextWidth = Math.max(maxTextWidth, textWidth);
      });

      // Add padding for icon (24px) + spacing (12px) + padding (28px)
      const contentWidth = maxTextWidth + 64;

      // Set width: minimum of button width, maximum of content width, with reasonable limits
      const optimalWidth = Math.max(
        buttonWidth, // At least as wide as button
        Math.min(contentWidth, 400) // But not wider than 400px
      );

      setDropdownWidth(Math.max(optimalWidth, 200)); // Minimum 200px
    }

    // Calculate height based on options count and template header
    const baseHeight = isTemplate ? 80 : 0; // Template header height
    const optionHeight = 32; // Each option height
    const padding = 8; // Top and bottom padding
    const maxVisibleOptions = 8; // Maximum visible options before scrolling

    const visibleOptions = Math.min(options.length, maxVisibleOptions);
    const calculatedHeight =
      baseHeight + visibleOptions * optionHeight + padding;

    setDropdownHeight(Math.min(calculatedHeight, 320)); // Maximum 320px height
  }, [options, isTemplate]);

  // Detect dropdown open direction
  // Detect dropdown open direction (auto or forced) — robust version
  useEffect(() => {
    if (!isOpen) return;

    if (direction === "up" || direction === "down") {
      setOpenDirection(direction);
      return;
    }

    let btn: HTMLElement | null = null;
    if (buttonRef && (buttonRef as any).current) {
      btn = (buttonRef as any).current as HTMLElement;
    } else if (dropdownRef && (dropdownRef as any).current) {
      btn = (dropdownRef.current as HTMLElement).querySelector("button");
    }

    if (!btn) {
      setOpenDirection("down");
      return;
    }

    const rect = btn.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const measuredHeight =
      dropdownHeight && dropdownHeight > 0 ? dropdownHeight : 240;

    const shouldOpenUp =
      spaceBelow < measuredHeight && spaceAbove > measuredHeight;
    const autoDirection = shouldOpenUp ? "up" : "down";

    setOpenDirection(autoDirection);
  }, [isOpen, dropdownHeight, direction, dropdownRef, buttonRef]);

  const buttonClasses = {
    primary: `!bg-primary !text-white hover:!bg-primary-dark 
    focus:ring-primary focus:ring-2 focus:ring-offset-0`,

    outline: `bg-transparent w-full ring-1  ring-[#9DBEB9]
      hover:!bg-white active:!bg-white focus:!bg-white hover:shadow-md focus:shadow-md active:shadow-md
    focus:ring-[#9DBEB9] focus:ring-1 focus:ring-offset-0`,

    green: "bg-[#23586A] text-white hover:bg-[#23586A]/90",
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        style={{
          cursor: disableDropdown ? "default" : "pointer",
        }}
        ref={buttonRef}
        type="button"
        variant="outline"
        className={`flex items-center !text-base justify-center !text-[#23586A] !font-medium  ${buttonClasses[buttonVariant]} px-7 h-13 transition duration-200 ${buttonClassName}`}
        onClick={disableDropdown ? () => {} : toggleDropdown}
        disabled={disabled}
        // title={title}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span className="truncate max-w-[200px] ">
          {selected
            ? showLabelWhenSelected
              ? `${label}   ${options.find((o) => o.value === selected)?.label}`
              : options.find((o) => o.value === selected)?.label
            : label}
        </span>
        {/* <span className="ml-2 flex items-center justify-center">
          {arrowIcon ? (
            <span
              className={`inline-block transition-transform duration-300 ${
                !isOpen ? "rotate-180" : ""
              }`}
            >
              {arrowIcon}
            </span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transition-transform duration-300 ${
                !isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span> */}
      </Button>

      {isOpen && (options.length > 0 || isProcessing) && (
        <div
          className={`absolute right-0  rounded-md shadow-lg border border-gray-200 z-50 bg-white ${
            openDirection === "up" ? "bottom-full mb-2" : "mt-2"
          } ${dropdownClassName}`}
          style={{
            width: `${dropdownWidth}px`,
            maxWidth: "500px",
            minWidth: "250px",
            maxHeight: "400px",
          }}
        >
          {isTemplate && (
            <div className="flex px-4 items-start border-b border-gray-200 flex-col justify-center py-4">
              <h4 className="text-sm text-start font-normal text-black mb-1">
                {t("dropdown_choose_template")}
              </h4>
              <span className="text-sm text-start text-gray-500">
                {t("dropdown_template_description")}
              </span>
            </div>
          )}

          <div
            className="overflow-y-auto py-2 space-y-2"
            style={{
              maxHeight: isTemplate ? "240px" : "320px",
            }}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <Loader fullScreen={false} border={2} size={24} />
              </div>
            ) : (
              options.map((option) => {
                const isActive = selected === option.value;
                return (
                  <div
                    key={option.value}
                    className={`flex items-center w-full text-left pl-3.5 pr-6 py-2 h-8 text-[16px] font-normal cursor-pointer transition rounded-md
                        ${isActive ? "bg-gray-100 font-medium" : ""}
                        hover:bg-gray-100 ${optionClassName}`}
                    onClick={() => handleSelect(option)}
                  >
                    {isActive ? (
                      <img
                        src={"/images/right-icon.svg"}
                        alt="Check"
                        className="w-4 h-4 mr-3 flex-shrink-0"
                      />
                    ) : (
                      <span className="w-4 h-4 mr-3 flex-shrink-0" />
                    )}
                    <span className="truncate text-[#23586A] text-base">
                      {option.label}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {isOpen && options.length === 0 && !isProcessing && (
        <div
          className={`absolute right-0 rounded-md shadow-lg border border-gray-200 z-50 bg-white ${
            openDirection === "up" ? "bottom-full border mb-2" : "mt-2"
          } ${dropdownClassName}`}
          style={{
            width: `${dropdownWidth}px`,
            maxWidth: "500px",
            minWidth: "250px",
          }}
        >
          <div className="p-4 text-center text-gray-500">
            {t("dropdown_no_options")}
          </div>
        </div>
      )}

      {/* Hidden element for text measurement */}
      <div
        ref={measureRef}
        className="absolute invisible pointer-events-none text-[16px] font-normal whitespace-nowrap"
        style={{ top: "-9999px", left: "-9999px" }}
      >
        {options.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

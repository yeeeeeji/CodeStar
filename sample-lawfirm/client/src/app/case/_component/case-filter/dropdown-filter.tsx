import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface DropdownFilterProps {
  options: string[];
  selectOption: (option: string) => Promise<void>;
  selectedOption: string;
}

export default function DropdownFilter({
  options,
  selectOption,
  selectedOption,
}: DropdownFilterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex hidden sm:block w-[114px]">
      <div
        className="flex justify-between w-full cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-base">{selectedOption}</div>
        <div>
          <ChevronDownIcon className="size-6" />
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute w-[108px] mt-4 py-[20px] px-[24px] border border-[#718096] rounded-[13px] bg-white shadow-md z-10 grid gap-[10]"
          onMouseLeave={toggleDropdown}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                selectOption(option);
                setIsOpen(false);
              }}
              className={`cursor-pointer
                ${
                  selectedOption === option
                    ? `text-[#2563EB] font-semibold`
                    : `text-black`
                }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { getCaseCategories } from "@/hooks/getCaseCategories";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface CaseFilter {
  searchFunc: (query: string) => void;
}

export default function CaseFilter({ searchFunc }: CaseFilter) {
  const [options, setOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("전체");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = async (option: string) => {
    searchFunc(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await getCaseCategories();
        setOptions(["전체", ...categories]);
      } catch (error) {
        console.error("카테고리 로딩 중 오류 발생", error);
      }
    };

    loadCategories();
  });

  return (
    <div ref={dropdownRef} className="flex w-[114px]">
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
          className="absolute w-[108px] mt-10 py-[20] px-[24] border border-[#718096] rounded-[13px] bg-white shadow-md z-10 grid gap-[10]"
          onMouseLeave={toggleDropdown}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => selectOption(option)}
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

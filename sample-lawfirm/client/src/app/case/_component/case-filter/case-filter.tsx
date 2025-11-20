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

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(e.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //     document.addEventListener("mousedown", handleClickOutside);

  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   };
  // }, []);

  return (
    <div ref={dropdownRef} className="flex">
      <div className="flex" onClick={toggleDropdown}>
        <div className="text-base w-[100px]">{selectedOption}</div>
        <div>
          <ChevronDownIcon className="size-6" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-6">
          {options.map((option) => (
            <div key={option} onClick={() => selectOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { getCaseCategories } from "@/hooks/getCaseCategories";
import { useEffect, useRef, useState } from "react";
import DropdownFilter from "./dropdown-filter";
import SlideFilter from "./slide-filter";

interface CaseFilter {
  searchFunc: (query: string) => void;
}

export default function CaseFilter({ searchFunc }: CaseFilter) {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("전체");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectOption = async (option: string) => {
    searchFunc(option);
    setSelectedOption(option);
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
    <div ref={dropdownRef}>
      <SlideFilter
        options={options}
        selectOption={selectOption}
        selectedOption={selectedOption}
      />
      <DropdownFilter
        options={options}
        selectOption={selectOption}
        selectedOption={selectedOption}
      />
    </div>
  );
}

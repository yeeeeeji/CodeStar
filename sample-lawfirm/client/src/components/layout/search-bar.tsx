"use client";

import { colors } from "@/constants/colors";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

interface SearchBarProps {
  searchFunc: (query: string) => void;
  placeholder?: string;
}

function SearchBarContent({
  searchFunc,
  placeholder = "코드별 사건사례를 검색해보세요.",
}: SearchBarProps) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";
  const [query, setQuery] = useState(queryParam);

  // const router = useRouter();
  // const pathname = usePathname();

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const handleSearch = () => {
    searchFunc(query);
    // if (query.trim() === "") {
    //   router.push(pathname);
    // } else {
    //   const params = new URLSearchParams();
    //   if (query.trim()) params.set("query", query);
    //   router.push(`${pathname}?${params.toString()}`);
    // }
  };

  return (
    <Form
      action={""}
      className={`
        w-full border border-codestar-gray rounded-2xl
        col-span-2 flex justify-between
        h-[56px] pr-[0px] grow
        sm:h-[82px] sm:mt-3 sm:pr-[15px] sm:flex-none
        lg:w-[800px]
        2xl:w-[962px] 2xl:h-full 2xl:mt-0
      `}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        name="query"
        className={`
          grow outline-none
          text-[16px] my-[15px] ml-[20px]
          sm:text-[24px] sm:my-[26px] sm:ml-[25px]
        `}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button type="submit">
        <MagnifyingGlassIcon
          className={`
            my-auto
            size-6 mr-[20px]
            sm:size-9 sm:mr-[25px] sm:ml-[15px]
            2xl:size-11 2xl:my-[26px]  
          `}
          color={colors.codestarGray}
          strokeWidth={3}
        />
      </button>
    </Form>
  );
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Suspense fallback={<div className="h-[82px]" />}>
      <SearchBarContent {...props} />
    </Suspense>
  );
}

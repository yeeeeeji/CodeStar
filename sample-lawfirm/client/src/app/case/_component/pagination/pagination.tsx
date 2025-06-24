"use client";

import PaginationArrowBtn from "@/components/button/PaginationArrowBtn";
import PaginationNumberBtn from "@/components/button/PaginationNumberBtn";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const startPage = Math.floor(((currentPage ?? 0) - 1) / 5) * 5;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center">
      <div className="flex my-[50px] gap-[44px]">
        <PaginationArrowBtn />
        <PaginationNumberBtn num={startPage + 1} currentPage={currentPage} />
        <PaginationNumberBtn num={startPage + 2} currentPage={currentPage} />
        <PaginationNumberBtn num={startPage + 3} currentPage={currentPage} />
        <PaginationNumberBtn num={startPage + 4} currentPage={currentPage} />
        <PaginationNumberBtn num={startPage + 5} currentPage={currentPage} />
        <PaginationArrowBtn right={true} />
      </div>
    </div>
  );
}

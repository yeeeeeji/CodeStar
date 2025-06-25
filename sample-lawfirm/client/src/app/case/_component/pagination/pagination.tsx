"use client";

import PaginationArrowBtn from "@/components/button/PaginationArrowBtn";
import PaginationNumberBtn from "@/components/button/PaginationNumberBtn";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const startPage = Math.floor(((currentPage ?? 0) - 1) / 5) * 5;
  const maxPage = 13; // 임시
  const [pages, setPages] = useState<number[]>([]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  useEffect(() => {
    setPages(
      Array.from(
        { length: Math.min(5, maxPage - startPage) },
        (v, i) => startPage + i + 1
      )
    );
  }, [maxPage, startPage]);

  return (
    <div className="flex justify-center">
      <div className="flex my-[50px] gap-[44px]">
        <PaginationArrowBtn
          currentPage={currentPage}
          path={createPageURL(currentPage - 1)}
        />
        {pages.map((page) => (
          <PaginationNumberBtn
            key={page}
            num={page}
            currentPage={currentPage}
            path={createPageURL(page)}
          />
        ))}
        <PaginationArrowBtn
          currentPage={currentPage}
          right={true}
          path={createPageURL(currentPage + 1)}
        />
      </div>
    </div>
  );
}

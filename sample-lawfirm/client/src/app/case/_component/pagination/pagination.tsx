"use client";

import { createPageURL } from "@/app/lib/url";
import PaginationArrowBtn from "@/components/button/PaginationArrowBtn";
import PaginationNumberBtn from "@/components/button/PaginationNumberBtn";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
  maxPage: number;
}

export default function Pagination({ maxPage }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const startPage = Math.floor(((currentPage ?? 0) - 1) / 5) * 5;
  const [pages, setPages] = useState<number[]>([]);

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
          path={createPageURL(pathname, searchParams, currentPage - 1)}
        />
        {pages.map((page) => (
          <PaginationNumberBtn
            key={page}
            num={page}
            currentPage={currentPage}
            path={createPageURL(pathname, searchParams, page)}
          />
        ))}
        <PaginationArrowBtn
          currentPage={currentPage}
          right={true}
          path={createPageURL(pathname, searchParams, currentPage + 1)}
        />
      </div>
    </div>
  );
}

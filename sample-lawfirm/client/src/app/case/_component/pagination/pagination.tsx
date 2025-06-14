"use client";

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

interface PaginationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
export default function Pagination({
  hasNextPage,
  hasPrevPage,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "5";

  return (
    <div className="flex">
      <button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/case=${Number(page) - 1}&per_page=${perPage}`);
        }}
      >
        <ArrowLeftCircleIcon />
      </button>
      {page} / {Math.ceil(10 / Number(perPage))}
      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/case=${Number(page) + 1}&per_page=${perPage}`);
        }}
      >
        <ArrowRightCircleIcon />
      </button>
    </div>
  );
}

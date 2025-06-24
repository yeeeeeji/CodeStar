import Link from "next/link";

interface PaginationNumberBtnProps {
  num: number;
  currentPage: number;
}

export default function PaginationNumberBtn({
  num,
  currentPage,
}: PaginationNumberBtnProps) {
  return (
    <div className="flex items-center justify-center">
      <Link
        href={`/case?page=${num}`}
        className={`text-[22px] ${
          num == currentPage ? "text-black" : "text-gray-300"
        }`}
      >
        {num}
      </Link>
    </div>
  );
}

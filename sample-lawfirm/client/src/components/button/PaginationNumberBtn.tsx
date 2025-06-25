import Link from "next/link";

interface PaginationNumberBtnProps {
  num: number;
  currentPage: number;
  path: string;
}

export default function PaginationNumberBtn({
  num,
  currentPage,
  path,
}: PaginationNumberBtnProps) {
  return (
    <div className="flex items-center justify-center">
      <Link
        href={path}
        className={`text-[22px] ${
          num == currentPage ? "text-black" : "text-gray-300"
        }`}
      >
        {num}
      </Link>
    </div>
  );
}

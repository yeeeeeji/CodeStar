import Link from "next/link";

interface PaginationNumberBtnProps {
  num: number;
  currentPage: number;
  path: string;
  pageFunc: (page: number) => void;
}

export default function PaginationNumberBtn({
  num,
  currentPage,
  path,
  pageFunc,
}: PaginationNumberBtnProps) {
  return (
    <div className="flex items-center justify-center">
      <Link
        href={path}
        className={`text-[22px] ${
          num == currentPage ? "text-black" : "text-gray-300"
        }`}
        onClick={() => {
          pageFunc(num);
        }}
      >
        {num}
      </Link>
    </div>
  );
}

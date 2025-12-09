import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface PaginationArrowBtnProps {
  right?: boolean;
  currentPage: number;
  maxPage: number;
  path?: string;
  pageFunc: (page: number) => void;
}

export default function PaginationArrowBtn({
  right = false,
  currentPage,
  maxPage,
  path = "",
  pageFunc,
}: PaginationArrowBtnProps) {
  const iconStyle = "size-3 sm:size-5";
  const disabled = right ? currentPage == maxPage : currentPage == 1;

  return (
    <Link
      href={disabled ? "" : path}
      className={disabled ? `pointer-events-none` : ``}
    >
      <div
        className={`
          ${disabled ? `border-gray-400` : `border-black`}
          border rounded-full flex items-center justify-center
          w-[30px] h-[30px]
          sm:w-[46px] sm:h-[46px]
        `}
        onClick={() => {
          pageFunc(currentPage + (right ? 1 : -1));
        }}
      >
        {right ? (
          <ChevronRightIcon
            className={iconStyle}
            color={disabled ? `gray` : `black`}
          />
        ) : (
          <ChevronLeftIcon
            className={iconStyle}
            color={disabled ? `gray` : `black`}
          />
        )}
      </div>
    </Link>
  );
}

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface PaginationArrowBtnProps {
  right?: boolean;
  current?: number;
}

export default function PaginationArrowBtn({
  right = false,
  current = 1,
}: PaginationArrowBtnProps) {
  const iconStyle = "size-5";

  return (
    <div className="border rounded-full w-[46px] h-[46px] flex items-center justify-center">
      <Link href={`/case?page=${right ? current + 1 : current - 1}`}>
        {right ? (
          <ChevronRightIcon className={iconStyle} />
        ) : (
          <ChevronLeftIcon className={iconStyle} />
        )}
      </Link>
    </div>
  );
}

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface PaginationArrowBtnProps {
  right?: boolean;
}

export default function PaginationArrowBtn({
  right = false,
}: PaginationArrowBtnProps) {
  const iconStyle = "size-5";

  return (
    <div className="border rounded-full w-[46px] h-[46px] flex items-center justify-center">
      <button className="">
        {!right ? (
          <ChevronLeftIcon className={iconStyle} />
        ) : (
          <ChevronRightIcon className={iconStyle} />
        )}
      </button>
    </div>
  );
}

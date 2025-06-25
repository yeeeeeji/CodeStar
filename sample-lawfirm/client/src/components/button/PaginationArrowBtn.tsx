import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface PaginationArrowBtnProps {
  right?: boolean;
  currentPage?: number;
  maxPage?: number;
  path?: string;
}

export default function PaginationArrowBtn({
  right = false,
  currentPage = 1,
  maxPage = 13,
  path = "",
}: PaginationArrowBtnProps) {
  const iconStyle = "size-5";
  const disabled = right ? currentPage == maxPage : currentPage == 1;
  const router = useRouter();

  return (
    <button
      disabled={disabled}
      onClick={() => {
        router.push(path);
      }}
    >
      <div
        className={`${
          disabled ? `border-gray-400` : `border-black`
        } border rounded-full w-[46px] h-[46px] flex items-center justify-center`}
      >
        {right ? (
          <ChevronRightIcon
            className={iconStyle}
            color={disabled ? `gray` : `black`}
          />
        ) : (
          <ChevronLeftIcon
            className={iconStyle}
            color={currentPage == 1 ? `gray` : `black`}
          />
        )}
      </div>
    </button>
    // <div className="border rounded-full w-[46px] h-[46px] flex items-center justify-center">
    //   <Link href={disabled ? "" : path}>
    //     {right ? (
    //       <ChevronRightIcon
    //         className={iconStyle}
    //         color={disabled ? `gray` : `black`}
    //       />
    //     ) : (
    //       <ChevronLeftIcon
    //         className={iconStyle}
    //         color={current == 1 ? `gray` : `black`}
    //       />
    //     )}
    //   </Link>
    // </div>
  );
}

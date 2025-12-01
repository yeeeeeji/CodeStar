import Link from "next/link";

interface ViewMoreBtnProps {
  path?: string;
  black?: boolean;
}

export default function ViewMoreBtn({
  path = "#",
  black = false,
}: ViewMoreBtnProps) {
  return (
    <Link href={path}>
      <div
        className={`inline-flex items-center justify-center w-[100px] h-[25px] sm:w-40 sm:h-12 lg:w-48 lg:h-14 border text-[10px] sm:text-sm lg:text-base transition-colors duration-300 ${
          black
            ? `hover:bg-black hover:text-white`
            : `border-white text-white hover:bg-white hover:text-black`
        }`}
      >
        자세히 보기
      </div>
    </Link>
  );
}

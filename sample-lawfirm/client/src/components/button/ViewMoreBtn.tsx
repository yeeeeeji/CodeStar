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
    <Link
      href={path}
      className={`border px-8 py-2 sm:px-12 sm:py-[18] md:px-16 md:py-[19.5] text-sm md:text-base lg:text-lg transition-colors duration-300 ${
        black
          ? `hover:bg-black hover:text-white`
          : `border-white text-white hover:bg-white hover:text-black`
      }`}
    >
      자세히보기
    </Link>
  );
}

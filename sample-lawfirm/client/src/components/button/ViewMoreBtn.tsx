interface ViewMoreBtnProps {
  black?: boolean;
}

export default function ViewMoreBtn({ black = false }: ViewMoreBtnProps) {
  return (
    <button
      className={`border px-8 py-2 sm:px-12 sm:py-2.5 md:px-16 md:py-3 text-sm md:text-base lg:text-lg transition-colors duration-300 ${
        black
          ? `hover:bg-black hover:text-white`
          : `border-white text-white hover:bg-white hover:text-black`
      }`}
    >
      자세히보기
    </button>
  );
}

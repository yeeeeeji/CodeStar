interface PaginationNumberBtnProps {
  num?: number;
  selected?: boolean;
}

export default function PaginationNumberBtn({
  num = 1,
  selected = false,
}: PaginationNumberBtnProps) {
  return (
    <div className="flex items-center justify-center">
      <button
        className={`text-[22px] ${selected ? "text-black" : "text-gray-300"}`}
      >
        {num}
      </button>
    </div>
  );
}

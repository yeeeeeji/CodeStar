import React, { useRef } from "react";

interface SlideFilterProps {
  options: string[];
  selectOption: (option: string) => Promise<void>;
  selectedOption: string;
}

export default function SlideFilter({
  options,
  selectOption,
  selectedOption,
}: SlideFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={scrollRef}
      className={`
      sm:hidden flex mb-[31px] 
      overflow-x-auto overscroll-x-contain scrolling-touch whitespace-nowrap scrollbar-hide 
      select-none cursor-grab
    `}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {options.map((option) => (
        <div
          key={option}
          onClick={() => selectOption(option)}
          className={`cursor-pointer ml-[30px] text-[16px] ${
            selectedOption === option
              ? `text-[#2563EB] font-semibold`
              : `text-gray-400`
          }`}
        >
          {option}
        </div>
      ))}
      <div className="mr-[30px]" />
    </div>
  );
}

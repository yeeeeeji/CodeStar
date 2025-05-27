interface PracticeItemProps {
  title: string;
  details: string[];
}

export default function PracticeItem({ title, details }: PracticeItemProps) {
  return (
    <div
      className={`
        w-full
        2xl:h-[400px]
        xl:h-[360px]
        lg:h-[300px]
        md:h-[260px]
        sm:h-[300px]
        bg-[#1B212D] flex flex-col justify-end
        pb-6 sm:pb-5 md:pb-4 lg:pb-6 xl:pb-7 2xl:pb-11
        pl-4 sm:pl-4 md:pl-3 lg:pl-4 xl:pl-5 2xl:pl-9
        relative overflow-hidden cursor-pointer
        before:absolute before:inset-0 before:bg-black before:opacity-0 
        hover:before:opacity-20 before:transition-opacity before:duration-300 before:ease-in-out
      `}
    >
      <p
        className='
          text-white 
          text-[20px] sm:text-[18px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px]
          font-semibold 
          pb-2 sm:pb-2 md:pb-2 lg:pb-3 xl:pb-4 2xl:pb-6
          relative z-10
        '
      >
        {title}
      </p>
      {details.map((detail, index) => (
        <p
          key={index}
          className='text-white text-[12px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[24px] relative z-10'
        >
          {detail}
        </p>
      ))}
    </div>
  );
}

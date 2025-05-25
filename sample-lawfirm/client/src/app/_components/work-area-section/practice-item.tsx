interface PracticeItemProps {
  title: string;
  details: string[];
}

export default function PracticeItem({ title, details }: PracticeItemProps) {
  return (
    <div
      className={`
        w-full
        2xl:max-w-[345px] 2xl:h-[400px]
        xl:max-w-[300px] xl:h-[360px]
        lg:max-w-[280px] lg:h-[340px]
        md:max-w-[260px] md:h-[320px]
        sm:max-w-[240px] sm:h-[300px]
        bg-[#1B212D] flex flex-col justify-end
        pb-8 sm:pb-9 md:pb-10 lg:pb-11
        pl-6 sm:pl-7 md:pl-8 lg:pl-9
        relative overflow-hidden cursor-pointer
        before:absolute before:inset-0 before:bg-black before:opacity-0 
        hover:before:opacity-20 before:transition-opacity before:duration-300 before:ease-in-out
      `}
    >
      <p
        className='
          text-white 
          text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]
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
          className='text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] relative z-10'
        >
          {detail}
        </p>
      ))}
    </div>
  );
}

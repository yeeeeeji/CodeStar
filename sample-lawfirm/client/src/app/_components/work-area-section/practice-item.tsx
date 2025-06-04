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
        bg-cover bg-center bg-no-repeat
        flex flex-col justify-end
        pb-6 sm:pb-5 md:pb-4 lg:pb-6 xl:pb-7 2xl:pb-11
        pl-4 sm:pl-4 md:pl-3 lg:pl-4 xl:pl-5 2xl:pl-9
        relative overflow-hidden cursor-pointer
        group
      `}
      style={{
        backgroundImage: `url('/images/main-page/work-area-pic.png')`
      }}
    >
      {/* 오버레이 */}
      <div className='absolute inset-0 bg-black opacity-70'></div>

      {/* 테두리 */}
      <div
        className='
          absolute 
          inset-0
          border-[3px] sm:border-[3px] md:border-4 lg:border-4 xl:border-[5px] 2xl:border-6
          border-white 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-500 
          ease-in-out
          pointer-events-none
        '
      ></div>

      {/* 텍스트 */}
      <div className='relative z-10'>
        <p
          className='
            text-white 
            text-[20px] sm:text-[18px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px]
            font-semibold 
            pb-2 sm:pb-2 md:pb-2 lg:pb-3 xl:pb-4 2xl:pb-6
          '
        >
          {title}
        </p>
        {details.map((detail, index) => (
          <p
            key={index}
            className='text-white text-[12px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[24px]'
          >
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}

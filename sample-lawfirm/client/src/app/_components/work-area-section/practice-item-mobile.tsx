interface PracticeItemMobileProps {
  title: string;
  details: string[];
}

export default function PracticeItemMobile({ title, details }: PracticeItemMobileProps) {
  return (
    <div
      className='
        min-w-[60%] max-w-[240px] w-full h-[300px] 
        bg-cover bg-center bg-no-repeat
        flex-shrink-0 flex flex-col justify-end 
        pb-8 pl-5 
        relative overflow-hidden cursor-pointer 
        group
      '
      style={{
        backgroundImage: `url('/images/main-page/work-area-pic.png')`
      }}
    >
      <div className='absolute inset-0 bg-black opacity-70'></div>

      <div
        className='
          absolute 
          inset-0
          border-6
          border-white 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-500 
          ease-in-out
          pointer-events-none
        '
      ></div>

      <div className='relative z-10'>
        <p className='text-white text-[24px] font-semibold'>{title}</p>
        {details.map((detail, index) => (
          <p key={index} className='text-white text-[16px]'>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}

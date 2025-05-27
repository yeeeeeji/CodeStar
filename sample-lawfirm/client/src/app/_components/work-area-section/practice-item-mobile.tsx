interface PracticeItemMobileProps {
  title: string;
  details: string[];
}

export default function PracticeItemMobile({ title, details }: PracticeItemMobileProps) {
  return (
    <div className='min-w-[60%] max-w-[240px] w-full h-[300px] bg-[#1B212D] flex-shrink-0 flex flex-col justify-end pb-8 pl-5 relative overflow-hidden cursor-pointer before:absolute before:inset-0 before:bg-black before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300 before:ease-in-out'>
      <p className='text-white text-[24px] font-semibold relative z-10'>{title}</p>
      {details.map((detail, index) => (
        <p key={index} className='text-white text-[16px] relative z-10'>
          {detail}
        </p>
      ))}
    </div>
  );
}

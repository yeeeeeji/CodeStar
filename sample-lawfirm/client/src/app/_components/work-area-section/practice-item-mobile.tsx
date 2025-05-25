interface PracticeItemMobileProps {
  title: string;
  details: string[];
}

export default function PracticeItemMobile({ title, details }: PracticeItemMobileProps) {
  return (
    <div className='min-w-[60%] max-w-[240px] w-full h-[300px] bg-codestar-black flex-shrink-0 flex flex-col justify-end pb-8 pl-5'>
      <p className='text-white text-[24px] font-semibold'>{title}</p>
      {details.map((detail, index) => (
        <p key={index} className='text-white text-[16px] font-medium'>
          {detail}
        </p>
      ))}
    </div>
  );
}

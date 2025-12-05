interface NewsCardProps {
  title?: string;
  image: string;
}

export default function NewsCard({ title, image }: NewsCardProps) {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
      <div className='relative w-full h-[175px] md:h-[264px]'>
        <div
          className='w-full h-full bg-center bg-cover'
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      {title && (
        <div className='mt-4 md:mt-[28px]'>
          <h2 className='font-bold text-[20px] md:text-[26px] leading-[150%] tracking-[-0.01em] text-left break-words whitespace-pre-wrap'>
            {title.split('\\n').map((line, index) => (
              <span key={index} className='block'>
                {line}
              </span>
            ))}
          </h2>
        </div>
      )}
    </div>
  );
}
import Image from 'next/image';

interface CorporateCardProps {
  title: string;
  image: string;
}

export default function CorporateCard({ title, image }: CorporateCardProps) {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
      <div className='relative w-full h-[264px]'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          priority={true}
        />
      </div>

      <div className='mt-[28px]'>
        <h2 className='font-bold text-[26px] leading-[150%] tracking-[-0.01em] text-left break-words whitespace-pre-wrap'>
          {title.split('\\n').map((line, index) => (
            <span key={index} className='block'>
              {line}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  width?: string;
  height?: string;
  children: ReactNode;
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  width = '100%',
  height = '100%',
  children
}: HeroSectionProps) {
  return (
    <div className='w-full flex-shrink-0 relative h-full' style={{ width, height }}>
      <Image src={imageSrc} alt={imageAlt} fill className='object-cover' priority quality={100} />
      <div className='absolute inset-0 flex items-center px-16 md:px-16 lg:px-20'>
        <div className='w-full max-w-[1440px] mx-auto'>{children}</div>
      </div>
    </div>
  );
}

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
      <Image src={imageSrc} alt={imageAlt} fill className='object-cover' priority />
      <div className='absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0'>
        <div className='w-80 sm:w-96 md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px]'>{children}</div>
      </div>
    </div>
  );
}

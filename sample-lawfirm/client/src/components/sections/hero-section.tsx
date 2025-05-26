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
      <div className='absolute inset-0 flex items-center justify-start pl-20 sm:pl-28 md:pl-40 lg:pl-56 xl:pl-68'>
        {children}
      </div>
    </div>
  );
}

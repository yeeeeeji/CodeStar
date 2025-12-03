import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  width?: string;
  height?: string;
  children: ReactNode;
  className?: string;
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  width = '100%',
  height = '100wh',
  children,
  className = ''
}: HeroSectionProps) {
  return (
    <div className={`w-full flex-shrink-0 relative ${className}`} style={{ width, height }}>
      <Image src={imageSrc} alt={imageAlt} fill className='object-cover' priority quality={80} />

      <div className='absolute inset-0 flex items-center px-[35px] md:px-16 lg:px-20'>
        <div className='w-full max-w-[1440px] mx-auto'>{children}</div>
      </div>
    </div>
  );
}

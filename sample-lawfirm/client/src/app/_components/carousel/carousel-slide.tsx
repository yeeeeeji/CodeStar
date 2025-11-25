import ViewMoreBtn from '@/components/button/ViewMoreBtn';
import HeroSection from '@/components/sections/hero-section';

export default function CarouselSlide() {
  return (
    <HeroSection imageSrc='/images/main-page/carousel-image.png' imageAlt='첫 번째 슬라이드' width='100%' height='100%'>
      <div className='max-w-[1440px] mx-auto text-start text-white'>
        <h1
          className='font-bold mb-4 md:mb-6 leading-tight tracking-[-0.01em] break-keep'
          style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
        >
          <span className='block md:inline whitespace-nowrap'>신뢰를 중심으로</span>
          <span className='block md:inline md:ml-2 whitespace-nowrap'>변화를 이끄는 로펌</span>
        </h1>
        <p
          className='font-medium tracking-[-0.01em] mb-8 md:mb-20 lg:mb-32'
          style={{ fontSize: 'clamp(20px, 3vw, 40px)' }}
        >
          법무법인 코드별과 함께하세요.
        </p>
        <ViewMoreBtn />
      </div>
    </HeroSection>
  );
}

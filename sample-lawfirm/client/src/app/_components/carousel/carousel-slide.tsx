import HeroSection from '@/components/sections/hero-section';

export default function CarouselSlide() {
  return (
    <HeroSection imageSrc='/images/main-page/carousel-image.png' imageAlt='첫 번째 슬라이드' width='100%' height='100%'>
      <div className='text-start text-white'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-bold mb-6 leading-tight tracking-[-0.01em]'>
          <span className='block sm:inline'>신뢰를 중심으로</span>
          <span className='block sm:inline sm:ml-2'>변화를 이끄는 로펌</span>
        </h1>
        <p className='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] mb-14 md:mb-22 lg:mb-26 xl:mb-32 font-medium whitespace-nowrap tracking-[-0.01em]'>
          법무법인 코드별과 함께하세요.
        </p>
        <button className='border border-white text-white px-8 py-2 sm:px-12 sm:py-2.5 md:px-16 md:py-3 text-sm md:text-base lg:text-lg hover:bg-white hover:text-black transition-colors duration-300'>
          자세히보기
        </button>
      </div>
    </HeroSection>
  );
}

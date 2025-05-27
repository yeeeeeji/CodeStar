import HeroSection from '@/components/sections/hero-section';

export default function MainPageBottomHeroSection() {
  return (
    <HeroSection
      imageSrc='/images/main-page/main-bottom-detail.png'
      imageAlt='메인페이지 하단 자세히보기'
      width='100%'
      height='clamp(500px, 85vh, 800px)'
    >
      <div className='text-start text-white w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-bold mb-6 leading-tight whitespace-nowrap tracking-[-0.01em]'>
          신뢰를 중심으로
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

import ViewMoreBtn from '@/components/button/ViewMoreBtn';
import HeroSection from '@/components/sections/hero-section';

export default function MainPageBottomHeroSection() {
  return (
    <HeroSection
      imageSrc='/images/main-page/main-bottom-detail.png'
      imageAlt='메인페이지 하단 자세히보기'
      width='100%'
      className='h-[150px] md:h-[500px] lg:h-[800px]'
    >
      <div className='text-start text-white w-full max-w-sm md:max-w-2xl lg:max-w-[1440px]'>
        <h1 className='text-[24px] md:text-4xl lg:text-[64px] font-bold mb-[5px] md:mb-6 leading-tight whitespace-nowrap tracking-[-0.01em]'>
          신뢰를 중심으로
        </h1>

        <p className='text-[16px] md:text-xl lg:text-[40px] font-normal sm:font-medium mb-0 md:mb-14 lg:mb-32 whitespace-normal md:whitespace-nowrap tracking-[-0.01em] leading-tight'>
          법무법인 코드별과
          <br className='block md:hidden' />
          함께하세요.
        </p>

        <div className='hidden md:block'>
          <ViewMoreBtn />
        </div>
      </div>
    </HeroSection>
  );
}

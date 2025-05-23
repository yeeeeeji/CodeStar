export default function CarouselSlide() {
  return (
    <div className='w-full flex-shrink-0 relative h-full'>
      <img src='/images/main-page/carousel-image.png' alt='첫 번째 슬라이드' className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-black/40 flex items-center justify-start pl-20 sm:pl-28 md:pl-40 lg:pl-56 xl:pl-68'>
        <div className='text-start text-white max-w-4xl'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold mb-6 leading-tight whitespace-nowrap'>
            신뢰를 중심으로 변화를 이끄는 로펌
          </h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-[40px] opacity-90 mb-14 md:mb-22 lg:mb-26 xl:mb-32 font-light whitespace-nowrap'>
            법무법인 코드별과 함께하세요.
          </p>
          <button className='border border-white text-white px-8 py-2 sm:px-12 sm:py-2.5 md:px-16 md:py-3 text-sm md:text-base lg:text-lg hover:bg-white hover:text-black transition-colors duration-300 font-medium'>
            자세히보기
          </button>
        </div>
      </div>
    </div>
  );
}

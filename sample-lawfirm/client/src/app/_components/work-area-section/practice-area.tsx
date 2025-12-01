'use client';

import { useState, useRef, useEffect } from 'react';
import PracticeItem from './practice-item';
import WorkAreaTitle from './work-area-title';

export default function PracticeArea() {
  const practiceAreas = [
    { title: '성범죄', details: ['강간, 강제추행, 아동성추행', '카메라촬영, 성매매'] },
    { title: '교통범죄', details: ['음주운전, 무면허운전', '12대 중과실 교통사고'] },
    { title: '부동산', details: ['명도소송, 공사대금', '불법하도급, 지역주택조합'] },
    { title: '상속분쟁', details: ['상속재산분할, 상속포기', '유류분반환청구인'] },
    { title: '이혼/가사', details: ['이혼, 재산분할, 양육권', '친권, 입양, 파양'] },
    { title: '회생파산', details: ['개인회생/파산', '법인회생/파산'] },
    { title: '경제/일반', details: ['사기, 횡령, 모욕', '상해, 폭행, 마약'] },
    { title: '기업법무', details: ['기업자문, 기업컨설팅', '계약서검토, 정관작성'] }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(practiceAreas.length / itemsPerPage);

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
    if (scrollRef.current) {
      const pageWidth = scrollRef.current.clientWidth;
      const target = pageWidth * index;
      scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const pageWidth = scrollRef.current.clientWidth;
      const newPage = Math.round(scrollLeft / pageWidth);
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full py-12 sm:py-36 px-4 bg-white sm:bg-codestar-dark-navy'>
      <div className='flex justify-center pb-[30px] sm:pb-15'>
        <WorkAreaTitle title='업무분야' position='center' iconColor='black sm:white' textColor='black sm:white' />
      </div>

      <div className='sm:hidden'>
        <div
          ref={scrollRef}
          className='overflow-x-auto snap-x snap-mandatory flex'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className='min-w-full snap-start flex gap-[13px] px-4 justify-center'>
              {practiceAreas
                .slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
                .map((area, index) => (
                  <div key={index} className='w-[150px] h-[177px] shrink-0'>
                    <PracticeItem title={area.title} details={area.details} />
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className='flex justify-center gap-[10px] mt-9'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-indicator-active' : 'bg-indicator-inactive'
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className='hidden sm:grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 
          gap-x-4 sm:gap-x-4 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6
          gap-y-[20px] sm:gap-y-[25px] md:gap-y-[30px] lg:gap-y-[35px] xl:gap-y-[40px] 2xl:gap-y-[50px]
          w-80 sm:w-96 md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] mx-auto'
      >
        {practiceAreas.map((area, index) => (
          <PracticeItem key={index} title={area.title} details={area.details} />
        ))}
      </div>
    </div>
  );
}

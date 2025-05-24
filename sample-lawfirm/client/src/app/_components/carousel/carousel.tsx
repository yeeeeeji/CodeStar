'use client';

import { useEffect, useState, useCallback } from 'react';
import CarouselSlide from './carousel-slide';

const originalSlides = [CarouselSlide, CarouselSlide, CarouselSlide];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [originalSlides[originalSlides.length - 1], ...originalSlides, originalSlides[0]];

  const resetTimer = useCallback(() => {
    return setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
  }, []);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const newTimer = resetTimer();
    setTimer(newTimer);

    return () => {
      if (newTimer) clearInterval(newTimer);
    };
  }, [resetTimer]);

  // 슬라이드 이동 함수
  const nextSlide = () => {
    if (!isTransitioning) return;

    if (timer) clearInterval(timer);

    setCurrentIndex((prev) => prev + 1);

    const newTimer = resetTimer();
    setTimer(newTimer);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;

    if (timer) clearInterval(timer);

    setCurrentIndex((prev) => prev - 1);

    const newTimer = resetTimer();
    setTimer(newTimer);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(originalSlides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((SlideComponent, index) => (
          <SlideComponent key={index} />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className='absolute left-6 md:left-16 lg:left-24 xl:left-32 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10'
        disabled={!isTransitioning}
      >
        <svg
          className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className='absolute right-6 md:right-16 lg:right-24 xl:right-32 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10'
        disabled={!isTransitioning}
      >
        <svg
          className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </button>
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  title: string;
  number: number;
  showPlus?: boolean;
  animate?: boolean;
}

export default function StatItem({ title, number, showPlus = false, animate = true }: StatItemProps) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!animate) {
      setCurrentNumber(number);
      return;
    }

    if (!isVisible) {
      setCurrentNumber(0);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step <= steps) {
        setCurrentNumber(Math.floor(increment * step));
      } else {
        setCurrentNumber(number);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [number, animate, isVisible]);

  return (
    <div ref={ref} className='text-center'>
      <p className='text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-5 2xl:mb-6 text-gray-700'>
        {title}
      </p>
      <p className='text-2xl sm:text-2xl md:text-3xl lg:text-3xl min-[1100px]:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900'>
        {currentNumber.toLocaleString()}
        {showPlus && ' +'}
      </p>
    </div>
  );
}

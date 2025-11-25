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
      <p className='font-semibold mb-4 md:mb-6' style={{ fontSize: 'clamp(12px, 2vw, 32px)' }}>
        {title}
      </p>
      <p
        className='font-bold tracking-[-0.01em] text-blue-600 md:text-black'
        style={{ fontSize: 'clamp(22px, 4vw, 64px)' }}
      >
        {currentNumber.toLocaleString()}
        {showPlus && ' +'}
      </p>
    </div>
  );
}

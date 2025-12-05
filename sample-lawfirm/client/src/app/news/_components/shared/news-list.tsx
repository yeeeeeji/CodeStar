'use client';

import { useEffect, useState } from 'react';
import NewsCard from './news-card';

interface NewsItem {
  id: string;
  title?: string;
  image: string;
}

interface NewsListProps {
  items: NewsItem[];
}

export default function NewsList({ items }: NewsListProps) {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      if (target.scrollLeft > 10) {
        setShowArrow(false);
      }
    };

    const scrollContainer = document.querySelector('.news-scroll-container');
    scrollContainer?.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='max-w-[1440px] mx-auto md:my-10'>
      {/* 모바일 */}
      <div className='md:hidden relative'>
        <div className='news-scroll-container overflow-x-auto scrollbar-hide'>
          <div className='flex gap-[10px] pl-[30px] pr-[30px]'>
            {items.map((item, index) => (
              <div
                key={item.id}
                className='flex-shrink-0 w-[315px]'
                style={{
                  marginLeft: index === 0 ? '-30px' : '0',
                  marginRight: index === items.length - 1 ? '-30px' : '0'
                }}
              >
                <NewsCard title={item.title} image={item.image} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 태블릿/데스크탑 */}
      <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[108px]'>
        {items.map((item) => (
          <NewsCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}
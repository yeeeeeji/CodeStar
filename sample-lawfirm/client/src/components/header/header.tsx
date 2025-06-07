'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 'about',
    name: '법인소개',
    href: '/introduce',
    items: [
      {
        id: '1',
        name: '법인소개',
        href: '#'
      },
      {
        id: '2',
        name: '법인소개',
        href: '#'
      },
      {
        id: '3',
        name: '법인소개',
        href: '#'
      }
    ]
  },
  {
    id: 'cases',
    name: '업무사례',
    href: '#',
    items: [
      {
        id: '4',
        name: '',
        href: '#'
      }
    ]
  },
  {
    id: 'team',
    name: '구성원 소개',
    href: '#',
    items: [
      {
        id: '5',
        name: '',
        href: '#'
      }
    ]
  },
  {
    id: 'news',
    name: '소식/자료',
    href: '#',
    items: [
      {
        id: '6',
        name: '',
        href: '#'
      }
    ]
  },
  {
    id: 'contact',
    name: '상담신청',
    href: '#',
    items: [
      {
        id: '7',
        name: '',
        href: '#'
      }
    ]
  }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMouseOver = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-[1440px] z-999'>
        {/* 하위 메뉴 바탕 상자 */}
        <div
          className={`absolute w-full h-40 bg-black transition-all duration-300 ease-in-out transform ${
            open ? 'translate-y-0 opacity-50' : '-translate-y-10 opacity-0 pointer-events-none'
          }`}
        ></div>
        <div className='absolute flex justify-between mt-[24px]' style={{ width: '100%' }}>
          <div>
            <h1>로고</h1>
          </div>
          <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className='flex justify-between w-120 text-white'>
              {categories.map((category) => (
                <div key={category.id}>
                  <Link href={category.href}>
                    <div className='my-3 border-b-2 border-transparent hover:border-indigo-600'>{category.name}</div>
                  </Link>
                  <div
                    className={`absolute transition-opacity duration-300 ease-in-out delay-0 ${
                      open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {category.items.map((item) => (
                      <div key={item.id}>{item.name}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

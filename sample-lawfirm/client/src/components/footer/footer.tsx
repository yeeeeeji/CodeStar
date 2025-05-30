import Image from 'next/image';

export default function Footer() {
  return (
    <div className='h-[195px] bg-codestar-dark-navy flex justify-center items-center'>
      <div className='w-[1440px] h-[114px] flex flex-col justify-between'>
        <Image src='/images/logo/logo.svg' alt='logo' width={160} height={38} />
        <div className='flex justify-between items-end'>
          <div className='space-y-1'>
            <p className='text-xs font-medium text-white'>주소 경기도 수원시 팔달구 효원로03번길 1-25 효원빌딩 7층</p>
            <p className='text-xs font-medium text-white'>
              사업자등록번호 512-62-125624 법률상담접수 1845-1788 광고책임변호사 김영수
            </p>
            <p className='text-xs font-medium text-white'>Copyright 법무법인 코드별 all rights reserved 2025.</p>
          </div>
          <div className='flex space-x-3'>
            <div className='w-7 h-7 bg-gray-300 rounded-full'></div>
            <div className='w-7 h-7 bg-gray-300 rounded-full'></div>
            <div className='w-7 h-7 bg-gray-300 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

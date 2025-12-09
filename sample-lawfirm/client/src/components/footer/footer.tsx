import Image from 'next/image';

export default function Footer() {
  return (
    <div className='h-[250px] sm:h-[195px] bg-codestar-dark-navy flex justify-center items-center'>
      <div className='w-full sm:w-[1440px] px-[30px] sm:px-0 sm:h-[114px] flex flex-col justify-center sm:justify-between'>
        <div className='pb-[22px] sm:pb-0 flex justify-center sm:justify-start'>
          <Image src='/images/logo/logo.png' alt='logo' width={160} height={38} />
        </div>
        <div className='flex flex-col sm:flex-row gap-7 sm:gap-0 sm:justify-between sm:items-end items-center'>
          <div className='space-y-1 text-center sm:text-left'>
            <p className='text-[10px] sm:text-xs font-medium text-white'>
              주소 경기도 수원시 팔달구 효원로03번길 1-25 효원빌딩 7층
            </p>
            <p className='text-[10px] sm:text-xs font-medium text-white'>
              사업자등록번호 512-62-125624 법률상담접수 1845-1788 광고책임변호사 김영수
            </p>
            <p className='text-[10px] sm:text-xs font-medium text-white'>
              Copyright 법무법인 코드별 all rights reserved 2025.
            </p>
          </div>
          <div className='flex space-x-3'>
            <Image src='/icons/naver.svg' alt='logo' width={28} height={28} />
            <Image src='/icons/instagram.svg' alt='logo' width={28} height={28} />
            <Image src='/icons/kakao.svg' alt='logo' width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

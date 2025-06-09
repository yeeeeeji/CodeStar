import Image from 'next/image';

export default function IntroduceBanner() {
  return (
    <div className='w-full h-[500px] relative'>
      <Image src='/images/introduce/introduce-banner.png' alt='법인소개 배너' fill className='object-cover' />

      <div className='absolute inset-0 flex flex-col'>
        <div className='h-24'></div>
        <div className='flex-1 flex items-center justify-center'>
          <h1 className='text-white text-[60px] font-bold tracking-[-0.01em]'>법인소개</h1>
        </div>
      </div>
    </div>
  );
}

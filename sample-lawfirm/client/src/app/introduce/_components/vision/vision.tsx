import VisionDetail from './vision-detail';

export default function Vision() {
  return (
    <div className='max-w-[1440px] mx-auto my-15 sm:mt-48 sm:mb-48'>
      <div className='mb-[50px] sm:mb-25'>
        <p className='text-base sm:text-[40px] font-bold tracking-[-0.01em] text-center'>VISION</p>
      </div>
      <div>
        <VisionDetail />
      </div>
    </div>
  );
}

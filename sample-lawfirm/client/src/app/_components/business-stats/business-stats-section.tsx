import StatItem from './stat-item';

export default function BusinessStatsSection() {
  return (
    <div className='relative w-full py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-22 mt-4 bg-[#F7F8FC]'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32'>
        <StatItem title='업무사례' number={70000} showPlus={true} />
        <StatItem title='일 평균 건수' number={71} showPlus={false} />
        <StatItem title='업무사례' number={1401} showPlus={true} />
        <StatItem title='대한민국 내 사무소' number={30} showPlus={false} />
      </div>
    </div>
  );
}

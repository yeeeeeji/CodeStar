import PracticeItem from './practice-item';
import PracticeItemMobile from './practice-item-mobile';
import WorkAreaTitle from './work-area-title';

export default function PracticeArea() {
  const practiceAreas = [
    {
      title: '성범죄',
      details: ['강간, 강제추행, 아동성추행', '카메라촬영, 성매매']
    },
    {
      title: '교통범죄',
      details: ['음주운전, 무면허운전', '12대 중과실 교통사고']
    },
    {
      title: '부동산',
      details: ['명도소송, 공사대금', '불법하도급, 지역주택조합']
    },
    {
      title: '상속분쟁',
      details: ['상속재산분할, 상속포기', '유류분반환청구인']
    },
    {
      title: '이혼/가사',
      details: ['이혼, 재산분할, 양육권', '친권, 입양, 파양']
    },
    {
      title: '회생파산',
      details: ['개인회생/파산', '법인회생/파산']
    },
    {
      title: '경제/일반',
      details: ['사기, 횡령, 모욕', '상해, 폭행, 마약']
    },
    {
      title: '기업법무',
      details: ['기업자문, 기업컨설팅', '계약서검토, 정관작성']
    }
  ];

  return (
    <div className='w-full py-36 px-4'>
      <div className='flex justify-center pb-15'>
        <WorkAreaTitle title='업무분야' position='center' />
      </div>

      <div
        className='
          hidden sm:grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 
          gap-x-4 sm:gap-x-4 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6
          gap-y-[20px] sm:gap-y-[25px] md:gap-y-[30px] lg:gap-y-[35px] xl:gap-y-[40px] 2xl:gap-y-[50px]
          w-80 sm:w-96 md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] mx-auto
        '
      >
        {practiceAreas.map((area, index) => (
          <PracticeItem key={index} title={area.title} details={area.details} />
        ))}
      </div>

      <div className='sm:hidden overflow-x-auto'>
        <div className='flex space-x-4 pl-2'>
          {practiceAreas.map((area, index) => (
            <PracticeItemMobile key={index} title={area.title} details={area.details} />
          ))}
        </div>
      </div>
    </div>
  );
}

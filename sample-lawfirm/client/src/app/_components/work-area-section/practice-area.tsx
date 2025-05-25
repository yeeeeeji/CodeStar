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
      title: '마약범죄',
      details: ['마약 제조, 판매, 사용', '대마초, 메스암페타민']
    },
    {
      title: '경제범죄',
      details: ['사기, 횡령, 배임', '금융사기, 보험사기']
    },
    {
      title: '폭력범죄',
      details: ['상해, 폭행, 협박', '특수폭행, 집단폭행']
    },
    {
      title: '교통범죄',
      details: ['음주운전, 무면허운전', '교통사고, 뺑소니']
    },
    {
      title: '재산범죄',
      details: ['절도, 강도, 손괴', '주거침입, 업무방해']
    },
    {
      title: '공직범죄',
      details: ['뇌물수수, 직권남용', '공무집행방해']
    },
    {
      title: '기타범죄',
      details: ['명예훼손, 모욕', '스토킹, 가정폭력']
    }
  ];

  return (
    <div className='w-full py-36 px-4'>
      <div className='flex justify-center pb-15'>
        <WorkAreaTitle title='업무분야' position='center' />
      </div>

      {/* PC/Tablet */}
      <div
        className='
          hidden sm:grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
          gap-y-[20px] sm:gap-y-[25px] md:gap-y-[30px] lg:gap-y-[35px] xl:gap-y-[40px] 2xl:gap-y-[50px]
          justify-items-center 
          max-w-[1440px] mx-auto
        '
      >
        {practiceAreas.map((area, index) => (
          <PracticeItem key={index} title={area.title} details={area.details} />
        ))}
      </div>

      {/* Mobile */}
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

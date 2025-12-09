import Image from 'next/image';

export default function VisionDetail() {
  const visions = [
    {
      text: '변화를 주도하는 선도적 로펌',
      mobileText: '변화를 주도하는\n선도적 로펌'
    },
    {
      text: '고객의 신뢰를\n최우선으로 하는 법률 동반자',
      mobileText: '고객의 신뢰를\n최우선으로 하는\n법률 동반자'
    },
    {
      text: '글로벌 기준에 부합하는\n법률 전문성 제공',
      mobileText: '글로벌 기준에 부합하는\n법률 전문성 제공'
    },
    {
      text: '경쟁력을 갖춘 법률 서비스',
      mobileText: '경쟁력을 갖춘\n법률 서비스'
    }
  ];

  return (
    <div className='flex flex-wrap sm:flex-nowrap px-[30px]'>
      {visions.map((vision, index) => (
        <div key={index} className='w-1/2 sm:w-auto sm:flex-1 flex flex-col items-center text-center mb-8 sm:mb-0'>
          <p className='text-2xl font-medium leading-[1.6] tracking-[-0.01em] text-codestar-blue'>
            {String(index + 1).padStart(2, '0')}
          </p>
          <Image
            src={`/images/introduce/icon_0${index + 1}.svg`}
            alt='logo'
            width={100}
            height={100}
            className='my-3 sm:my-11 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]'
          />
          {/* 모바일 텍스트 */}
          <p className='sm:hidden text-base font-medium leading-[1.6] tracking-[-0.01em] whitespace-pre-line text-codestar-blue'>
            {vision.mobileText}
          </p>
          {/* 데스크탑 텍스트 */}
          <p className='hidden sm:block text-[20px] font-medium leading-[1.6] tracking-[-0.01em] whitespace-pre-line text-codestar-blue'>
            {vision.text}
          </p>
        </div>
      ))}
    </div>
  );
}

import Image from 'next/image';

export default function VisionDetail() {
  const visions = [
    { text: '변화를 주도하는 선도적 로펌' },
    { text: '고객의 신뢰를\n최우선으로 하는 법률 동반자' },
    { text: '글로벌 기준에 부합하는\n법률 전문성 제공' },
    { text: '경쟁력을 갖춘 법률 서비스' }
  ];

  return (
    <div className='flex justify-between gap-5'>
      {visions.map((vision, index) => (
        <div key={index} className='p-15 text-center flex flex-col items-center'>
          <p className='text-2xl font-medium leading-[1.6] tracking-[-0.01em]'>{String(index + 1).padStart(2, '0')}</p>
          <Image src='/images/introduce/icon_ex.svg' alt='logo' width={100} height={100} className='my-11' />
          <p className='text-[20px] font-medium leading-[1.6] tracking-[-0.01em] whitespace-pre-line'>{vision.text}</p>
        </div>
      ))}
    </div>
  );
}

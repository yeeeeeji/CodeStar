import Image from 'next/image';

export default function ProfileInfoMobile() {
  return (
    <div>
      <div className='px-[30px]'>
        <p className='text-2xl font-bold tracking-[-0.01em] leading-[1.4] text-codestar-dark-navy mb-2.5'>
          가장 어려운 순간에도
          <br />
          끝까지 함께하는 법률파트너
        </p>
        <p className='text-4xl font-bold tracking-[-0.01em] leading-[1] text-blue-600'>법무법인 코드별</p>
      </div>

      <div className='relative w-full h-[200px] overflow-hidden my-[30px]'>
        <Image src='/images/introduce/profile-image.png' alt='회사 설명 이미지' fill className='object-cover' />
      </div>

      <div className='px-[30px]'>
        <p className='font-medium leading-[1.6] tracking-[-0.01em]'>
          법무법인 코드별(CODE STAR)는 2005년 설립 이래 기업 법무, 지적재산권, 금융, 국제거래, 노동 및 인사 소송·중재 등
          폭넓은 법률 서비스를 제공하며 업계 최고의 신뢰를 받아온 종합 로펌입니다
          <br />
          <br />
          풍부한 경험과 전문성을 갖춘 변호사, 변리사, 세무사 등 각 분야 전문가들이 유기적으로 협업해 고객의 문제를
          종합적으로 분석하고 최적의 솔루션을 제공합니다.
        </p>
      </div>
    </div>
  );
}

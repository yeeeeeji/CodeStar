import Banner from '@/components/layout/banner';
import Corporate from './_components/corporate/corporate';
import MediaCodestar from './_components/media/media-codestar';
import NewsLetter from './_components/newsletter/newsletter';
import Breadcrumb from '@/components/layout/breadcrumb';

export default function NewsPage() {
  return (
    <div className='px-[30px] md:px-0'>
      {/* 모바일 상단 메뉴 */}
      <div className='block md:hidden pt-6'>
        <div className='pb-[15px]'>
          <Breadcrumb />
        </div>
        <p className='text-[32px] font-bold text-codestar-dark-navy'>소식/자료</p>
      </div>
      {/* 배너 */}
      <div className='hidden md:block'>
        <Banner imageAlt='소식/자료 배너' title='소식/자료' imageSrc='/images/banner/news-banner.png' />
      </div>
      {/* 법인소식 */}
      <Corporate />
      {/* 미디어 코드별 */}
      <MediaCodestar />
      {/* 뉴스레터 */}
      <NewsLetter />
    </div>
  );
}

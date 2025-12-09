import Banner from '@/components/layout/banner';
import Corporate from './_components/corporate/corporate';
import MediaCodestar from './_components/media/media-codestar';
import NewsLetter from './_components/newsletter/newsletter';
import Breadcrumb from '@/components/layout/breadcrumb';

export default function NewsPage() {
  return (
    <div>
      {/* 모바일 상단 메뉴 */}
      <Breadcrumb title='소식/자료' />
      {/* 배너 */}
      <div className='hidden sm:block'>
        <Banner imageAlt='소식/자료 배너' title='소식/자료' imageSrc='/images/banner/news-banner.png' />
      </div>
      <div className='px-[30px] sm:px-10'>
        <div className='max-w-[1440px] mx-auto'>
          {/* 법인소식 */}
          <Corporate />
          {/* 미디어 코드별 */}
          <MediaCodestar />
          {/* 뉴스레터 */}
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}

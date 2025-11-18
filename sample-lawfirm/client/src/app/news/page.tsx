import Banner from '@/components/layout/banner';
import Corporate from './_components/corporate/corporate';
import MediaCodestar from './_components/media/media-codestar';

export default function NewsPage() {
  return (
    <div>
      {/* 배너 */}
      <Banner imageAlt='소식/자료 배너' title='소식/자료' imageSrc='/images/banner/news-banner.png' />
      {/* 법인소식 */}
      <Corporate />
      {/* 미디어 코드별 */}
      <MediaCodestar />
    </div>
  );
}

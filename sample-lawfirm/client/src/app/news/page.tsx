import Banner from '@/components/layout/banner';
import Corporate from './_components/corporate/corporate';

export default function NewsPage() {
  return (
    <div>
      {/* 배너 */}
      <Banner imageAlt='법인소개 배너' title='소식/자료' imageSrc='/images/banner/news-banner.png' />
      {/* 법인소식 */}
      <Corporate />
    </div>
  );
}

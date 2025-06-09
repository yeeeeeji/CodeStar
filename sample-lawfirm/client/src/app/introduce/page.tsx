import IntroduceBanner from './_components/banner/banner';
import CompanyHistory from './_components/history/history';

export default function IntroducePage() {
  return (
    <div>
      {/* 배너 */}
      <IntroduceBanner />
      {/* 연혁 */}
      <CompanyHistory />
    </div>
  );
}

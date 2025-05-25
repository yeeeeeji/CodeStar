import BusinessStatsSection from './_components/business-stats';
import Carousel from './_components/carousel';
import PracticeArea from './_components/work-area-section';

export default function Home() {
  return (
    <div>
      {/* 화면 맨 위 캐러셀 */}
      <Carousel />
      {/* 숫자 현황 부분분 */}
      <BusinessStatsSection />
      {/* 업무분야 */}
      <PracticeArea />
    </div>
  );
}

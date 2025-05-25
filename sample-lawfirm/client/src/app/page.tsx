import BusinessStatsSection from "./_components/business-stats/business-stats-section";
import Carousel from "./_components/carousel/carousel";
import PracticeArea from "./_components/work-area-section";
import CaseSection from "./_components/case-section/case-section";

export default function Home() {
  return (
    <div>
      {/* 화면 맨 위 캐러셀 */}
      <Carousel />
      {/* 숫자 현황 부분 */}
      <BusinessStatsSection />
      {/* 업무분야 */}
      <PracticeArea />
      {/* 업무사례 */}
      <CaseSection />
    </div>
  );
}

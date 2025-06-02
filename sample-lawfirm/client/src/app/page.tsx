import BusinessStatsSection from "./_components/business-stats/business-stats-section";
import Carousel from "./_components/carousel/carousel";
import PracticeArea from "./_components/work-area-section";
import CaseSection from "./_components/case-section/case-section";
import MainPageBottomHeroSection from "./_components/main-page-hero-section/main-page-bottom-hero-section";
import MemberIntroSection from "./_components/member-intro-section/member-intro-section";
import DirectionsSection from "./_components/directions-section/directions-section";

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
      {/* 하단 자세히보기 */}
      <MainPageBottomHeroSection />
      {/* 구성원소개 */}
      <MemberIntroSection />
      {/* 오시는 길 */}
      <DirectionsSection />
    </div>
  );
}

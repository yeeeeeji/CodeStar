import BusinessStatsSection from "./_components/business-stats/business-stats-section";
import Carousel from "./_components/carousel/carousel";
import CaseSection from "./_components/case-section/case-section";

export default function Home() {
  return (
    <div>
      <Carousel />
      <BusinessStatsSection />
      <CaseSection />
    </div>
  );
}

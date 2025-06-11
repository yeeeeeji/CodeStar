import Banner from "@/components/layout/banner";
// import IntroduceBanner from "./_components/banner/banner";
import CompanyHistory from "./_components/history/history";

export default function IntroducePage() {
  return (
    <div>
      {/* 배너 */}
      {/* <IntroduceBanner /> */}
      <Banner imageAlt="법인소개 배너" title="법인소개" />
      {/* 연혁 */}
      <CompanyHistory />
    </div>
  );
}

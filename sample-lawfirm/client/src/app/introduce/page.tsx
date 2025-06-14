import Banner from '@/components/layout/banner';
import CompanyHistory from './_components/history/history';
import ProfileInfo from './_components/profile-info/profile-info';
import Spacer from '@/components/ui/spacer';
import Vision from './_components/vision/vision';

export default function IntroducePage() {
  return (
    <div>
      {/* 배너 */}
      <Banner imageAlt='법인소개 배너' title='법인소개' />
      {/* 회사 설명 */}
      <ProfileInfo />
      {/* 여백 */}
      <Spacer />
      {/* 비전 */}
      <Vision />
      {/* 여백 */}
      <Spacer />
      {/* 연혁 */}
      <CompanyHistory />
    </div>
  );
}

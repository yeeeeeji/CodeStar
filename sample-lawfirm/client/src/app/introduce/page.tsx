import Banner from '@/components/layout/banner';
import CompanyHistory from './_components/history/history';
import ProfileInfo from './_components/profile-info/profile-info';
import Vision from './_components/vision/vision';
import Directions from './_components/directions/directions';
import Breadcrumb from '@/components/layout/breadcrumb';
import ProfileInfoMobile from './_components/profile-info/profile-info-mobile';

export default function IntroducePage() {
  return (
    <div>
      {/* 모바일 상단 메뉴 */}
      <Breadcrumb title='법인소개' paddingBottom={50} />
      {/* 배너 */}
      <div className='hidden sm:block'>
        <Banner imageAlt='법인소개 배너' title='법인소개' />
      </div>

      {/* 회사 설명 */}
      <div className='hidden sm:block'>
        <ProfileInfo />
      </div>
      <div className='block sm:hidden'>
        <ProfileInfoMobile />
      </div>
      {/* 비전 */}
      <Vision />
      {/* 연혁 */}
      <CompanyHistory />
      {/* 오시는 길 */}
      <Directions />
    </div>
  );
}

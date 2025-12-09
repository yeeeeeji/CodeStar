import Banner from '@/components/layout/banner';
import Reservation from './_components/reservation/reservation';
import ReservationStep from './_components/reservation-step/reservation-step';
import Breadcrumb from '@/components/layout/breadcrumb';

export default function ConsultationPage() {
  return (
    <div>
      <Breadcrumb
        title='상담예약'
        textColor='text-white'
        iconColor='text-white'
        bgColor='codestar-dark-navy'
        contentGap={0}
      />
      <div className='hidden sm:block'>
        <Banner imageAlt='상담신청 배너' title='상담신청' imageSrc='/images/banner/reservation-banner.png' />
      </div>
      <div className='hidden sm:block'>
        <ReservationStep />
      </div>
      <Reservation />
    </div>
  );
}

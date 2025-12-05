import Banner from '@/components/layout/banner';
import Reservation from './_components/reservation/reservation';
import ReservationStep from './_components/reservation-step/reservation-step';
import Breadcrumb from '@/components/layout/breadcrumb';

export default function ConsultationPage() {
  return (
    <div>
      <div className='block md:hidden px-[30px] pt-6 bg-codestar-dark-navy'>
        <Breadcrumb textColor='text-white' iconColor='text-white' />
      </div>
      <div className='hidden md:block'>
        <Banner imageAlt='상담신청 배너' title='상담신청' imageSrc='/images/banner/reservation-banner.png' />
      </div>
      <div className='hidden md:block'>
        <ReservationStep />
      </div>
      <Reservation />
    </div>
  );
}

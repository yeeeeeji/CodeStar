import Banner from '@/components/layout/banner';
import Reservation from './_components/reservation/reservation';
import ReservationStep from './_components/reservation-step/reservation-step';

export default function ConsultationPage() {
  return (
    <div>
      <Banner imageAlt='상담신청 배너' title='상담신청' imageSrc='/images/banner/reservation-banner.png' />
      <ReservationStep />
      <Reservation />
    </div>
  );
}

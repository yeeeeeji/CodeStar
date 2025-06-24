import ReservationInput from "./reservation-input";

export default function Reservation() {
  return (
    <div className="py-44 bg-codestar-dark-navy">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[40px] font-bold tracking-[-0.01em] text-center text-white mb-27">상담 예약</p>
        <ReservationInput label="이름" placeholder="이름을 입력해주세요" />
        <ReservationInput label="휴대폰번호" placeholder="휴대폰번호를 입력해주세요" />
        <ReservationInput label="문의내용" placeholder="문의 내용을 입력해주세요" isTextarea={true} rows={5} />
        <ReservationInput label="파일첨부" placeholder="파일선택" isFile={true}
        />
      </div>
    </div>
  )
}
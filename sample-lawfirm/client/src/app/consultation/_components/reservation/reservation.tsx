'use client';

import { useState } from 'react';
import { saveReservation, ReservationData } from '@/lib/db/reservations';
import ReservationInput from './reservation-input';
import ConsultationType from './consultation-type';
import PrivacyConsent from './privacy-consent';

interface FormData {
  name: string;
  phone: string;
  content: string;
  file: File | null;
  consultationType: string;
  privacyConsent: boolean | null;
}

export default function Reservation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    content: '',
    file: null,
    consultationType: 'new',
    privacyConsent: null
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (file: File | null): void => {
    setFormData((prev) => ({
      ...prev,
      file: file
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    if (!formData.name || !formData.phone || !formData.content) {
      setSubmitMessage('모든 필수 정보를 입력해주세요.');
      return;
    }

    if (formData.privacyConsent !== true) {
      setSubmitMessage('개인정보 수집 및 이용동의가 필요합니다.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const reservationData: ReservationData = {
      name: formData.name,
      phone: formData.phone,
      content: formData.content,
      fileName: formData.file ? formData.file.name : null,
      createdAt: new Date(),
      status: '대기'
    };

    const result = await saveReservation(reservationData);

    if (result.success) {
      console.log('예약이 저장되었습니다. ID:', result.id);
      setSubmitMessage('예약이 성공적으로 접수되었습니다!');

      setFormData({
        name: '',
        phone: '',
        content: '',
        file: null,
        consultationType: 'new',
        privacyConsent: null
      });
    } else {
      console.error('예약 저장 중 오류:', result.error);
      setSubmitMessage('예약 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className='py-[15px] md:py-24 lg:py-44 bg-codestar-dark-navy px-[30px] md:px-8 2xl:px-0'>
      <div className='max-w-[1440px] mx-auto'>
        {/* <p className='text-[32px] md:text-[40px] font-bold tracking-[-0.01em] text-left md:text-center text-white mb-[10px] md:mb-27'>
          상담 예약
        </p> */}

        {/* 모바일 전용 텍스트 */}
        <div className='block md:hidden text-left text-white text-[20px] leading-relaxed mb-8'>
          <p>법무법인 코드별은 의뢰인의 상황을</p>
          <p>가장 먼저 이해하는 것에서 출발합니다.</p>
          <p className='mt-4'>아래 양식을 작성해 주시면</p>
          <p>신속히 연락드리겠습니다.</p>
        </div>

        <ConsultationType
          value={formData.consultationType}
          onChange={(value: string) => handleInputChange('consultationType', value)}
        />

        <ReservationInput
          label='이름'
          placeholder='이름을 입력해주세요'
          value={formData.name}
          onChange={(value: string) => handleInputChange('name', value)}
        />

        <ReservationInput
          label='휴대폰번호'
          placeholder='휴대폰번호를 입력해주세요'
          type='phone'
          value={formData.phone}
          onChange={(value: string) => handleInputChange('phone', value)}
        />

        <ReservationInput
          label='문의내용'
          placeholder='문의 내용을 입력해주세요'
          isTextarea={true}
          rows={5}
          value={formData.content}
          onChange={(value: string) => handleInputChange('content', value)}
        />

        <ReservationInput label='파일첨부' placeholder='파일선택' isFile={true} onFileChange={handleFileChange} />

        <PrivacyConsent
          value={formData.privacyConsent}
          onChange={(value: boolean) => setFormData((prev) => ({ ...prev, privacyConsent: value }))}
        />

        {/* 모바일 */}
        <div className='flex md:hidden flex-col gap-3'>
          <button className='w-full h-9 text-white bg-transparent border-[1.5px] border-white rounded-[5px] text-sm font-medium'>
            약관 자세히보기
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full h-[45px] text-white rounded-[5px] text-sm font-bold transition-colors ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3E4899] hover:bg-[#323d7a]'
            }`}
          >
            {isSubmitting ? '접수 중...' : '상담 접수하기'}
          </button>
        </div>

        {/* 데스크톱 */}
        <div className='hidden md:flex justify-center mt-8 md:mt-12'>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-8 md:px-12 py-3 md:py-4 text-base md:text-[24px] font-bold rounded-[5px] transition-colors ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {isSubmitting ? '접수 중...' : '예약 신청'}
          </button>
        </div>

        {submitMessage && (
          <div className='text-center mt-4 md:mt-6'>
            <p
              className={`text-sm md:text-[20px] font-medium ${
                submitMessage.includes('성공') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {submitMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

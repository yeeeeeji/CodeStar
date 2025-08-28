"use client"

import { useState } from 'react';
import { saveReservation, ReservationData } from '@/lib/db/reservations';
import ReservationInput from "./reservation-input";

interface FormData {
  name: string;
  phone: string;
  content: string;
  file: File | null;
}

export default function Reservation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    content: '',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (file: File | null): void => {
    setFormData(prev => ({
      ...prev,
      file: file
    }));
  };


  // 나중에 복잡해지면 훅으로 따로 분리~~ 할거임.. 안할수도
  const handleSubmit = async (): Promise<void> => {
    if (!formData.name || !formData.phone || !formData.content) {
      setSubmitMessage('모든 필수 정보를 입력해주세요.');
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

    // DB에 저장하는 함수 호출
    const result = await saveReservation(reservationData);

    if (result.success) {
      console.log("예약이 저장되었습니다. ID:", result.id);
      setSubmitMessage('예약이 성공적으로 접수되었습니다!');

      // 폼 초기화
      setFormData({
        name: '',
        phone: '',
        content: '',
        file: null
      });
    } else {
      console.error("예약 저장 중 오류:", result.error);
      setSubmitMessage('예약 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="py-44 bg-codestar-dark-navy">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[40px] font-bold tracking-[-0.01em] text-center text-white mb-27">상담 예약</p>

        <ReservationInput
          label="이름"
          placeholder="이름을 입력해주세요"
          value={formData.name}
          onChange={(value: string) => handleInputChange('name', value)}
        />

        <ReservationInput
          label="휴대폰번호"
          placeholder="휴대폰번호를 입력해주세요"
          value={formData.phone}
          onChange={(value: string) => handleInputChange('phone', value)}
        />

        <ReservationInput
          label="문의내용"
          placeholder="문의 내용을 입력해주세요"
          isTextarea={true}
          rows={5}
          value={formData.content}
          onChange={(value: string) => handleInputChange('content', value)}
        />

        <ReservationInput
          label="파일첨부"
          placeholder="파일선택"
          isFile={true}
          onFileChange={handleFileChange}
        />

        <div className="flex justify-center mt-12">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-12 py-4 text-[24px] font-bold rounded-[5px] transition-colors ${isSubmitting
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-white text-black hover:bg-gray-100'
              }`}
          >
            {isSubmitting ? '접수 중...' : '예약 신청'}
          </button>
        </div>

        {/* 나중에 디자인 생기면 alert로 변경하던지... 하기 */}
        {submitMessage && (
          <div className="text-center mt-6">
            <p className={`text-[20px] font-medium ${submitMessage.includes('성공') ? 'text-green-400' : 'text-red-400'
              }`}>
              {submitMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
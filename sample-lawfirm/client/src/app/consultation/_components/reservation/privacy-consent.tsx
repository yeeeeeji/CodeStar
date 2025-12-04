'use client';

import RadioButton from "@/components/button/radio-button";


interface PrivacyConsentProps {
  value: boolean | null;
  onChange: (value: boolean) => void;
}

export default function PrivacyConsent({ value, onChange }: PrivacyConsentProps) {
  return (
    <div className='mb-[34px] md:mb-12 mt-8 md:mt-0 text-center md:text-left block md:hidden'>
      <p className='text-sm md:text-lg text-white mb-4'>
        개인정보 수집 및 이용동의에 동의합니다.
      </p>
      <div className='flex gap-10 md:gap-8 justify-center md:justify-start'>
        <RadioButton
          name='privacyConsent'
          value='yes'
          checked={value === true}
          onChange={() => onChange(true)}
          label='네'
        />
        <RadioButton
          name='privacyConsent'
          value='no'
          checked={value === false}
          onChange={() => onChange(false)}
          label='아니오'
        />
      </div>
    </div>
  );
}
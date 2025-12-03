'use client';

import RadioButton from "@/components/button/radio-button";

interface ConsultationTypeProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ConsultationType({ value, onChange }: ConsultationTypeProps) {
  return (
    <div className='mb-7 md:mb-14 block md:hidden'>
      <div className='flex gap-12 md:gap-8'>
        <RadioButton
          name='consultationType'
          value='new'
          checked={value === 'new'}
          onChange={onChange}
          label='신규'
        />
        <RadioButton
          name='consultationType'
          value='return'
          checked={value === 'return'}
          onChange={onChange}
          label='재상담'
        />
      </div>
    </div>
  );
}
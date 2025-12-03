'use client';

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
}

export default function RadioButton({ name, value, checked, onChange, label }: RadioButtonProps) {
  return (
    <label className='flex items-center gap-2 cursor-pointer'>
      <div className='relative w-5 h-5 md:w-6 md:h-6'>
        <input
          type='radio'
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
          className='sr-only'
        />
        <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
          {checked && <div className='w-[13px] h-[13px] md:w-4 md:h-4 rounded-full bg-[#3E4899]' />}
        </div>
      </div>
      <span className='text-sm md:text-lg text-white'>{label}</span>
    </label>
  );
}
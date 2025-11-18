'use client';

import { useEffect, useState } from 'react';

// 휴대폰 번호 포매팅
const formatPhoneNumber = (value: string) => {
  if (!value) return '';
  const cleaned = value.replace(/\D/g, '');

  const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);

  if (match) {
    const parts = [match[1], match[2], match[3]].filter((part) => part);
    return parts.join('-');
  }
  return value;
};

interface BaseProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

interface InputProps extends BaseProps {
  isTextarea?: false;
  isFile?: false;
  type?: 'text' | 'phone'; // 'phone' 타입 추가
}

interface FileProps extends BaseProps {
  isTextarea?: false;
  isFile: true;
  accept?: string;
  onFileChange?: (file: File | null) => void;
}

interface TextareaProps extends BaseProps {
  isTextarea: true;
  rows: number;
}

type ReservationInputProps = InputProps | FileProps | TextareaProps;

export default function ReservationInput(props: ReservationInputProps) {
  const { label, placeholder, value, onChange } = props;
  const [internalValue, setInternalValue] = useState<string>(value || '');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    let initialValue = value || '';
    if ('type' in props && props.type === 'phone') {
      initialValue = formatPhoneNumber(initialValue);
    }
    setInternalValue(initialValue);
  }, [value, props]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newValue = e.target.value;

    if ('type' in props && props.type === 'phone') {
      newValue = formatPhoneNumber(newValue);
    }

    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    if ('onFileChange' in props && props.onFileChange) {
      props.onFileChange(file);
    }
  };

  return (
    <div className={`flex w-full gap-2 mb-14 ${props.isTextarea ? 'items-start' : 'items-center h-24'}`}>
      <div className={`flex-[2] flex items-center ${props.isTextarea ? 'h-24' : ''}`}>
        <p className='text-[32px] font-bold tracking-[-0.01em] text-white pl-8'>{label}</p>
      </div>

      {'isFile' in props && props.isFile ? (
        <div className='flex-[10] h-full bg-white rounded-[5px] flex items-center px-8 cursor-pointer relative'>
          <input
            type='file'
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
            onChange={handleFileChange}
            accept={props.accept}
          />
          <div className='flex items-center gap-3 text-[32px] font-medium tracking-[-0.01em] text-gray-500'>
            <svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66L9.64 16.2a2 2 0 01-2.83-2.83l8.49-8.48' />
            </svg>
            <span>{selectedFile ? selectedFile.name : placeholder}</span>
          </div>
        </div>
      ) : props.isTextarea ? (
        // 여러 줄 텍스트 입력창
        <textarea
          className='flex-[10] bg-white rounded-[5px] text-[32px] font-medium tracking-[-0.01em] placeholder:text-gray-500 focus:outline-none px-8 py-6 resize-none'
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          rows={props.rows}
        />
      ) : (
        // 기본 한 줄 텍스트 입력창
        <input
          className='flex-[10] h-full bg-white p-2 rounded-[5px] text-[32px] font-medium tracking-[-0.01em] placeholder:text-gray-500 focus:outline-none px-8'
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          type={'type' in props && props.type === 'phone' ? 'tel' : 'text'}
          maxLength={'type' in props && props.type === 'phone' ? 13 : undefined}
        />
      )}
    </div>
  );
}

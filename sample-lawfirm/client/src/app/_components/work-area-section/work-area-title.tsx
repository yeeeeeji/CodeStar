import { colors } from '@/constants/colors';
import { BriefcaseIcon } from '@heroicons/react/20/solid';

interface TitleProps {
  title: string;
  position?: 'left' | 'center' | 'right';
  fontSize?: number;
}

export default function WorkAreaTitle({ title, position = 'left', fontSize = 40 }: TitleProps) {
  const getSquarePosition = () => {
    switch (position) {
      case 'right':
        return 'justify-end';
      case 'center':
        return 'justify-center';
      case 'left':
      default:
        return 'justify-start';
    }
  };

  return (
    <div className='inline-block'>
      <div className={`flex ${getSquarePosition()} mb-[20px]`}>
        <BriefcaseIcon className='size-8' color={colors.gray700} />
      </div>
      <p className='font-bold' style={{ fontSize: `${fontSize}px` }}>
        {title}
      </p>
    </div>
  );
}

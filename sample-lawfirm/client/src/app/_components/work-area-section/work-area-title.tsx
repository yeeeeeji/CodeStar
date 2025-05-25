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
      <div className={`flex ${getSquarePosition()} mb-2`}>
        <div className='w-4 h-4 border border-gray-900' style={{ borderWidth: '1.5px' }}></div>
      </div>
      <p className='font-semibold' style={{ fontSize: `${fontSize}px` }}>
        {title}
      </p>
    </div>
  );
}

interface NewsletterItemProps {
  title: string;
  date: Date;
}

export default function NewsletterItem({ title, date }: NewsletterItemProps) {
  const isNew = () => {
    const currentDate = new Date();
    const twoWeeksAgo = new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000);
    return date >= twoWeeksAgo;
  };

  const formatDate = (date: Date) => {
    return date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .replace(/\. /g, '.')
      .replace(/\.$/, '');
  };

  return (
    <div className='border-b border-black py-5'>
      <div className='flex items-start gap-3 mb-7'>
        <p className='text-[18px] font-medium'>{title}</p>
        {isNew() && (
          <div className='flex items-center justify-center w-[30px] h-[30px] bg-[#9747FF] flex-shrink-0'>
            <span className='text-white text-[20px] font-medium tracking-[-0.01em] leading-[150%]'>N</span>
          </div>
        )}
      </div>
      <p className='text-[16px]'>{formatDate(date)}</p>
    </div>
  );
}

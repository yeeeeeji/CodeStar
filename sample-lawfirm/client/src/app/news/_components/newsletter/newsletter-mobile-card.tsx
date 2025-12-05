interface NewsletterMobileCardProps {
  title: string;
  date: Date;
}

export default function NewsletterMobileCard({ title, date }: NewsletterMobileCardProps) {
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
    <div className='bg-[#FAFAFA] rounded-[5px] p-[26px]'>
      <div className='mb-[8px]'>
        <p className='text-[16px] font-medium leading-[24px] mb-[4px]'>뉴스레터</p>
        <div className='w-[20px] h-[2px] bg-[#161616]' />
      </div>
      <div className='mb-[12px] mt-[8px]'>
        <p className='text-[20px] leading-[32px] inline'>{title}</p>
        {isNew() && (
          <div className='inline-flex items-center justify-center w-[20px] h-[20px] mb-0.5 bg-[#2C3547] ml-[8px] align-middle'>
            <span className='text-white text-[12px] font-medium'>N</span>
          </div>
        )}
      </div>

      {/* 날짜 */}
      <p className='text-[16px] font-light text-[#2563EB]'>{formatDate(date)}</p>
    </div>
  );
}